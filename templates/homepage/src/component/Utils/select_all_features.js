import React from "react";
import {SELECT_ALL_UPDATE} from "./utils";
import {connect} from 'react-redux';
import {REGISTERED_FEATURES} from "./registered_features";

class SelectAllFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.handleFeatures = this.handleFeatures.bind(this);
        this.state = {
            selected: true
        }
    }

    handleFeatures(e) {
        let selected = this.state.selected
        let platform = this.props.platform
        if (selected) {
            SELECT_ALL_UPDATE(selected, platform)
            let operations = REGISTERED_FEATURES[platform].SELECT_ALL
            this.props.SELECT_ALL(platform, operations)
            selected = false
            this.setState({selected})
        } else {
            SELECT_ALL_UPDATE(selected, platform);
            let operations = {};
            this.props.DELETE_ALL(platform, operations);
            selected = true;
            this.setState({selected})
        }
    }

    render() {
        return (
            <div className="center_element">
                <div className="select_all">
                    <div className="f_action" onClick={this.handleFeatures} id="all"/>
                    <p onClick={this.handleFeatures}>SELECT ALL</p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch => {
    return {
        SELECT_ALL: (platform, operations) => dispatch({
            type: 'SELECT_ALL', platform, operations
        }),
        DELETE_ALL: (platform, operations) => dispatch({
            type: 'DELETE_ALL', platform, operations
        })
    }
})

export default connect(null, mapDispatchToProps)(SelectAllFeatures)