import {REGISTERED_FEATURES} from "./registered_features";

export const API_URL_MAP = {
    'Web': '/web/',
    'Android': '/android/',
    'Ios': '/ios/'
}

export const MAP_STRING_TO_DATA = (data, type) => {
    let generated_string = ''
    for (let operation in data) {
        generated_string += REGISTERED_FEATURES[type][operation]['string_rep']
    }
    return generated_string
}

const CALCULATE_FILE_SIZE = (file_size => {
    const maximum_file_size = 20;
    let user_file_size = Math.round(file_size / (1024 * 1024));
    return maximum_file_size > user_file_size;
})

export const VALIDATE_IMAGE = ((image_type, image_size) => {
    let user_img_type = image_type.split('/')[1];
    let image_type_required = {png: 'png', jpeg: 'jpeg', jpg: 'jpg'};
    return user_img_type in image_type_required && CALCULATE_FILE_SIZE(image_size);
})