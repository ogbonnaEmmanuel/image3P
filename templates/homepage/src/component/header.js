import React from "react";
import header_image from './file_ani.mp4'

const Header = (() => {
    return (
        <div>
            <header>
                <div className="center_element">
                    <div id="balls_range">
                        <div className="ball" id="ball_green"/>
                        <div className="ball" id="ball_red"/>
                        <div className="ball" id="ball_blue"/>
                    </div>
                </div>
            </header>
            <div className="center_element">
                <nav id="nav_design">
                    <div id="nav_text">
                        <span id="img_brand_1">IMAGE</span>
                        <span id="img_brand_2">3PC</span>
                    </div>
                </nav>
            </div>

            <div className="center_element">
                <div id="hero">
                    <h3 id="hero_text">
                        MAKE YOUR IMAGE FILES RESPONSIVE
                        ON WEB,IOS AND ANDROID
                    </h3>

                    <video autoPlay loop muted playsInline src={header_image} id="img_header"/>
                </div>
            </div>
        </div>
    )
})
export default Header