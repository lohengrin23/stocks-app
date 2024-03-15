import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private localNotifications: LocalNotifications
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.triggerNotification();
  }

  triggerNotification(){
    console.log('notification first');
    const now = new Date();
    this.localNotifications.schedule({
      text: 'Tiene nueva información acerca de nuestra empresa',
      foreground: true,
    })

    for (let i = 1; i <= 60; i++) {
      const nextMinute = new Date(now.getTime() + i * 60 * 1000); // Add i minutes
      console.log('notification');
      
      this.localNotifications.schedule({
        text: 'Tiene nueva información acerca de nuestra empresa', // Message to display
        foreground: true, // Display notification when app is in foreground (optional)
        trigger: { at: nextMinute } // Schedule next notification at next minute
      });
    }
  }
}
