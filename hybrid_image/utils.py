import os
import secrets
import zipfile

REGISTERED_FEATURES = {
    'Web': {
        '1': 'compress',
        '2': 'create_favicon'
    },
    'Android': {
        '1': {'name': 'LDPI', 'size': (36, 'LDPI')},
        '2': {'name': 'MDPI', 'size': (48, 'MDPI')},
        '3': {'name': 'HDPI', 'size': (72, 'HDPI')},
        '4': {'name': 'XHDPI', 'size': (96, 'XHDPI')},
        '5': {'name': 'XXHDPI', 'size': (144, 'XXHDPI')},
        '6': {'name': 'XXXHDPI', 'size': (192, 'XXXHDPI')},
    },
    'Ios': {
        '1': {'name': '@x', 'size': (100, '@X')},
        '2': {'name': '@2x', 'size': (200, '@2X')},
        '3': {'name': '@3x', 'size': (300, '@3X')},
    }
}


def get_selected_feature(features, platform):
    selected_feature = []
    for feature in features:
        if platform != 'Web':
            mark_id_to_feature = REGISTERED_FEATURES[platform][feature]['size']
        else:
            mark_id_to_feature = REGISTERED_FEATURES[platform][feature]
        selected_feature.append(mark_id_to_feature)
    return selected_feature


def delete_created_files(list_of_filename=None):
    for files in list_of_filename:
        os.remove(files)


def create_zip_folder(path=None, list_of_filename=None):
    zip_name = secrets.token_hex(8) + '.zip'
    zip_path = os.path.join(path, zip_name)
    with zipfile.ZipFile(zip_path, 'w', compression=zipfile.ZIP_DEFLATED) as file_zip:
        for files in list_of_filename:
            file_zip.write(files)
    delete_created_files(list_of_filename)
    return zip_name


def decouple_user_data(feature_type, request):
    user_image = request.FILES['user_image']
    user_request = request.POST['actions']
    selected_request = get_selected_feature(user_request, feature_type)
    return user_image, selected_request


def generate_location_filename(image_file, image_folder, config_name=None):
    file_name, ext = os.path.splitext(image_file.name)
    if config_name:
        config_name = f'[{config_name}]'
        file_name = secrets.token_hex(8) + config_name + ext
    else:
        file_name = secrets.token_hex(8) + ext
    save_location = os.path.join(image_folder, file_name)
    return save_location
