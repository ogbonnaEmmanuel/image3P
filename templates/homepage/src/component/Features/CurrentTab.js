import React from "react";
import AndroidUi from "./AndroidUi";
import IosUi from "./IosUi";
import WebUi from "./WebUi";
import {connect} from 'react-redux';

class ClickedTabUi extends React.Component {

    currentUi = (() => {
        let clickedTab = this.props.clickedTab;
        switch (clickedTab) {
            case "android_color":
                return <AndroidUi/>
            case "ios_color":
                return <IosUi/>
            default:
                return <WebUi/>
        }
    })

    render() {
        return (
            <div>
                {this.currentUi()}
            </div>
        )
    }
}

const mapStateToProps = (state => {
    return {
        clickedTab: state.TabReducer.currentTab
    }
})

export default connect(mapStateToProps)(ClickedTabUi)