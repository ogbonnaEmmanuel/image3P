import {REGISTERED_FEATURES} from "./registered_features";

export const SELECT_ALL_UPDATE = (selected, feature_type) => {
    let user_action_style = '';
    if (selected) {
        user_action_style = "4px solid green";
    } else {
        user_action_style = "0px"
    }
    document.getElementById('all').style.border = user_action_style
    let features = REGISTERED_FEATURES[feature_type].ALL;
    features.forEach(feature => {
        if (feature_type === 'Web') {
            document.getElementById(feature).style.border = user_action_style;
        } else {
            document.getElementById(feature['name']).style.border = user_action_style;
        }
    })
}

export const SINGLE_SELECT_INDICATOR = ((indicator_id, update_status) => {
    if (update_status) {
        document.getElementById(indicator_id).style.border = "4px solid green";
    } else {
        document.getElementById(indicator_id).style.border = "0px";
    }
})