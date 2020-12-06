from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from Ios.ios_features import IosFeatures
from hybrid_image.utils import decouple_user_data, create_zip_folder


@csrf_exempt
def generate_image(request):
    image_file, selected_request = decouple_user_data('Ios', request)
    perform_request = IosFeatures(image_file=image_file)
    if len(selected_request) == 1:
        perform_request.generate_ios_image(selected_request[0])
    else:
        for feature in selected_request:
            perform_request.generate_ios_image(feature)
    zip_filename = create_zip_folder(path=perform_request.image_folder,
                                     list_of_filename=perform_request.files_created)
    return JsonResponse(
        {'filename': zip_filename}
    )
