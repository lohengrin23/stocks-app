import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  showPassword: boolean = false;


  constructor(private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {}

  async login() {
  
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/home']);
    } else {
      console.log('Invalid username or password');
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


}
