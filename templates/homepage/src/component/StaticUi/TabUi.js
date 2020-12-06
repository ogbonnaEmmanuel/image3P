import React from "react";
import web_image from "../web.png";
import Android_image from "../android.png";
import Ios_image from "../ios.png";
import {connect} from 'react-redux'

class TabUi extends React.Component {

    constructor(props) {
        super(props);
        this.handleFocus = this.handleFocus.bind(this);
        this.state = {
            tab_colors: {
                web_color: {active: "#7c7f1f", inactive: "#ffffff"},
                android_color: {active: "#7c1a0a", inactive: "#ffffff"},
                ios_color: {active: "#0a707c", inactive: "#ffffff"}
            },
            active_tab: {
                tab_name: "web_color"
            }
        }
    }

    handleFocus = ((e) => {
        const ID_MAP = {
            '1': 'web_color',
            '2': 'android_color',
            '3': 'ios_color'
        }
        let userAction = e.target.id;
        if (userAction in ID_MAP) {
            userAction = ID_MAP[userAction];
        }
        let prev_tab = this.state.active_tab.tab_name;
        if (prev_tab !== userAction && userAction !== "" && prev_tab !== "") {
            let prev_element = document.getElementById(prev_tab);
            prev_element.style.backgroundColor = this.state.tab_colors[prev_tab].active;
            prev_element.style.color = "#ffffff";
            let current_element = document.getElementById(userAction);
            current_element.style.backgroundColor = this.state.tab_colors[userAction].inactive;
            current_element.style.color = "#000000";
            this.setState({
                active_tab: {
                    tab_name: userAction
                }
            })
        }
        this.props.update_tab(userAction);
    })

    render() {
        return (
            <div className="center_element">

                <div id="box_feature">

                    <div className="box_container" id="android_color" onClick={this.handleFocus}>
                        <img src={Android_image} alt="android" className="f_img_size" id="2"
                             onClick={this.handleFocus}/>
                        <p id="2" onClick={this.handleFocus}>ANDROID</p>
                    </div>

                    <div className="box_container" id="web_color" onClick={this.handleFocus}>
                        <img src={web_image} alt="web" className="f_img_size" id="1"
                             onClick={this.handleFocus}/>
                        <p id="1" onClick={this.handleFocus}>WEB</p>
                    </div>

                    <div className="box_container" id="ios_color" onClick={this.handleFocus}>
                        <img src={Ios_image} alt="ios" className="f_img_size" id="3"
                             onClick={this.handleFocus}/>
                        <p id="3" onClick={this.handleFocus}>IOS</p>
                    </div>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch => {
    return {
        update_tab: (tab_name) => dispatch({
            type: 'update_tab',
            tab_name: tab_name
        })
    }
})

export default connect(null, mapDispatchToProps)(TabUi)