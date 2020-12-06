from PIL import Image

from hybrid_image.utils import create_zip_folder, generate_location_filename
import os


class WebFeatures:
    def __init__(self, image_file):
        self.files_created = []
        self.image_file = image_file
        self.image_folder = os.getcwd()

    def compress(self):
        image_file = self.image_file
        user_image = Image.open(image_file)
        save_location = generate_location_filename(image_file=image_file, image_folder=self.image_folder)
        user_image.save(save_location, optimize=True)
        self.files_created.append(save_location)

    def create_favicon(self):
        sizes = {'favicon_1': (16, 16), 'favicon_2': (32, 32)}
        for size in sizes:
            image_file = self.image_file
            user_image = Image.open(image_file)
            save_location = generate_location_filename(image_file, self.image_folder, size)
            user_image.thumbnail(sizes[size])
            user_image.save(save_location)
            self.files_created.append(save_location)

    def map_feature_to_function(self, feature_name):
        self.__getattribute__(feature_name)()

    def create_zip_folder(self):
        create_zip_folder(self.image_folder, self.files_created)
