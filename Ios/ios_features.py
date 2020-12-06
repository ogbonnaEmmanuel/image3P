from PIL import Image

from hybrid_image.utils import generate_location_filename
import os


class IosFeatures:
    def __init__(self, image_file):
        self.image_file = image_file
        self.files_created = []
        self.image_folder = os.getcwd()

    def generate_ios_image(self, image_size):
        user_image = Image.open(self.image_file)
        """
        using the data structure for registered
        features 0 represent the requested
        file size from the tuple and
        1 represent the filename
        """
        resize_size = (image_size[0], image_size[0])
        user_image.thumbnail(resize_size)
        save_location = generate_location_filename(image_file=self.image_file,
                                                   image_folder=self.image_folder,
                                                   config_name=str(image_size[1]))
        user_image.save(save_location, optimize=True)
        self.files_created.append(save_location)
