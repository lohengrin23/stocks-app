import { Injectable } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private imagePicker: ImagePicker, private file: File) { }

  selectAndStoreImage(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.imagePicker.getPictures({ maximumImagesCount: 1 }).then((results) => {
        if (results.length > 0) {
          const imageUri = results[0];
          this.file.resolveLocalFilesystemUrl(imageUri).then((entry: any) => {
            entry.file((file) => {
              if (file.size <= 2 * 1024 * 1024) { // Ensure file size is less than 2MB
                const reader = new FileReader();
                reader.onloadend = () => {
                  const imageData = reader.result as string;
                  localStorage.setItem('avatar', imageData)
                  resolve(imageData);
                };
                reader.readAsDataURL(file);
              } else {
                reject('Image size exceeds 2MB');
              }
            });
          }).catch((err) => reject(err));
        } else {
          reject('No image selected');
        }
      }).catch((err) => reject(err));
    });
  }
}
