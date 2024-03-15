import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username = 'admin';
  private timer: any;
 

  constructor(/*private localNotifications: LocalNotifications,*/ public platform: Platform) {
    //this.localNotifications.requestPermission();
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    
  
  }


  

  
}
