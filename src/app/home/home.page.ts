import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username = 'admin';
 

  constructor(
   
  ) {

  }

  ionViewWillEnter() {
 
  }

  filterContacts(event: any) {
    let selectedCategory = event.detail.value;
 

    this.loadContacts(selectedCategory);
  }

  loadContacts(category: string) {
   
  }

  
}
