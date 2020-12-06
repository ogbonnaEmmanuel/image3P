import React from "react";
import SelectAllFeatures from "../Utils/select_all_features";
import {REGISTERED_FEATURES} from "../Utils/registered_features";
import {SINGLE_SELECT_INDICATOR} from "../Utils/utils";
import {connect} from 'react-redux';

class WebUi extends React.Component {

    constructor(props) {
        super(props);
        this.action_indicator = this.action_indicator.bind(this);
    }

    action_indicator = ((e) => {
        let operation = e.target.id;
        let {user_previous_operation} = this.props
        if (operation in user_previous_operation) {
            SINGLE_SELECT_INDICATOR(operation, false)
            this.props.singleDelete('Web', operation)
        } else {
            SINGLE_SELECT_INDICATOR(operation, true)
            this.props.singleUpdate('Web', operation)
        }
    })


    render() {

        const all_features = (() => {
            let features = REGISTERED_FEATURES.Web.ALL;
            return features.map((feature, index) => {
                return (
                    <div className="user_features" key={index}>
                        <div className="feature_box">
                            <div className="f_action" id={feature} onClick={this.action_indicator}/>
                            <div className="feature_name">{feature}</div>
                        </div>
                    </div>
                )
            })
        })
        return (
            <div>
                <div className="center_element">
                    <p className="feature_text">SELECT IMAGE FEATURE FOR WEB</p>
                </div>
                <SelectAllFeatures platform={'Web'}/>
                {all_features()}
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

export default connect(mapStateToProps, mapDispatchToProps)(WebUi)