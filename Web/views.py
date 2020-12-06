from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from Web.web_features import WebFeatures
from hybrid_image.utils import decouple_user_data, create_zip_folder


@csrf_exempt
def get_request_to_process(request):
    user_image, selected_request = decouple_user_data('Web', request)
    perform_request = WebFeatures(image_file=user_image)
    if len(selected_request) == 1:
        perform_request.map_feature_to_function(selected_request[0])
    else:
        for feature in selected_request:
            perform_request.map_feature_to_function(feature)
    zip_file_name = create_zip_folder(path=perform_request.image_folder,
                                      list_of_filename=perform_request.files_created)
    return JsonResponse(
        {'filename': zip_file_name}
    )
