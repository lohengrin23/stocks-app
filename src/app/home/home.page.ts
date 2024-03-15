import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username = 'admin';
  private timer: any;
 

  constructor(public platform: Platform) {}

  ngAfterViewInit() {
  }

  ngOnInit() {
    
  
  }


  

  
}
