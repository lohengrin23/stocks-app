import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ImageService } from '../services/image.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  showPassword: boolean = false;


  constructor(private router: Router, private toastCtrl: ToastController, private imageService: ImageService,
    private imagePicker: ImagePicker, private file: File) { }

  ngOnInit() {}

  async login() {
  
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/home']);
    } else {
      console.log('Usuario o contraseña inválidas');
      const toast = await this.toastCtrl.create({
        message: 'Usuario o contraseña inválidas',
        duration: 3000
      });
      toast.present();
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  selectImage() {
    this.selectAndStoreImage().then((imageData) => {
      
      console.log('imageData', imageData);
    }).catch(async (error) => {
      const toast = await this.toastCtrl.create({
        message: `Error al cargar la imagen: ${JSON.stringify(error)}`,
        duration: 3000
      });
      toast.present();
      console.error('Error selecting image:', JSON.stringify(error));
    });
  }

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
