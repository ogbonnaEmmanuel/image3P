import React from "react";
import FooterUi from "./StaticUi/footerUi";
import TabUi from "./StaticUi/TabUi";
import UploadUi from "./StaticUi/upload";
import ClickedTabUi from "./Features/CurrentTab";


class FeatureUi extends React.Component {

    render() {
        return (
            <section>
                <section id="feature_ui">
                    <TabUi/>
                    <div className="center_element">
                        <div className="features_section">
                            <ClickedTabUi/>
                            <UploadUi/>
                        </div>
                    </div>
                </section>
                <FooterUi/>
            </section>
        )
    }
}

export default FeatureUi