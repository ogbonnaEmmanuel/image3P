import React from "react";
import {REGISTERED_FEATURES} from "../Utils/registered_features";
import {SINGLE_SELECT_INDICATOR} from "../Utils/utils";
import SelectAllFeatures from "../Utils/select_all_features";
import {connect} from 'react-redux'

class AndroidUi extends React.Component {

    constructor(props) {
        super(props);
        this.action_indicator = this.action_indicator.bind(this);
    }

    action_indicator = ((e) => {
        let operation = e.target.id;
        let {user_previous_operation} = this.props
        if (operation in user_previous_operation) {
            SINGLE_SELECT_INDICATOR(operation, false)
            this.props.singleDelete('Android', operation)
        } else {
            SINGLE_SELECT_INDICATOR(operation, true)
            this.props.singleUpdate('Android', operation)
        }
    })

    render() {

        const all_features = (() => {
            return REGISTERED_FEATURES.Android.ALL.map((feature, index) => {
                return (
                    <div className="user_features" key={index}>
                        <div className="feature_box">
                            <div className="f_action" id={feature.name} onClick={this.action_indicator}/>
                            <div className="feature_name">{feature.name} => {feature.size}</div>
                        </div>
                    </div>
                )
            })
        })
        return (
            <div>
                <div className="center_element">
                    <p className="feature_text">SELECT IMAGE FEATURE FOR ANDROID</p>
                </div>
                <SelectAllFeatures platform={'Android'}/>
                {all_features()}
                <div className="center_element">
                    <a href="https://developer.android.com/training/multiscreen/screendensities"
                       className="read_more_link" target="_blank" rel="noopener noreferrer">
                        Why this sizes
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state => {
    return {
        user_previous_operation: state.operations.user_selected_operation
    }
})

const mapDispatchToProps = (dispatch => {
    return {
        singleUpdate: (platform, operation) => {
            dispatch({type: 'single_update', platform, operation})
        },
        singleDelete: (platform, operation) => {
            dispatch({type: 'single_delete', platform, operation})
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AndroidUi)