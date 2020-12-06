from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from Android.android_features import AndroidFeatures
from hybrid_image.utils import decouple_user_data, create_zip_folder


@csrf_exempt
def generate_responsive_android_images(request):
    user_image, selected_request = decouple_user_data('Android', request)
    perform_request = AndroidFeatures(image_file=user_image)
    if len(selected_request) == 1:
        perform_request.responsive_android_images(selected_request[0])
    else:
        for feature in selected_request:
            perform_request.responsive_android_images(feature)
    zip_filename = create_zip_folder(path=perform_request.image_folder,
                                     list_of_filename=perform_request.files_created)
    return JsonResponse(
        {'filename': zip_filename}
    )
