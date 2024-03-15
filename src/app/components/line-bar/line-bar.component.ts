import { Component, Input, OnInit, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
//import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';




@Component({
  selector: 'app-line-bar',
  templateUrl: './line-bar.component.html',
  styleUrls: ['./line-bar.component.scss'],
})
export class LineBarComponent implements AfterViewInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  private chart: any;
  private chartInitialized = false;
  username = 'admin';
  selectedDay: string = 'Lunes'; 
  fechaDia = 'Lunes, 24 de enero de 2022';
  private timer: any;
  avatarUrl = './assets/avatar.png';

 
  constructor(private localNotifications: LocalNotifications) {
    this.localNotifications.requestPermission();
   }

  async ngOnInit() {

    const img = await localStorage.getItem('avatar');
    if(img) this.avatarUrl = img;
     this.timer = setInterval(() => {
      this.triggerNotification()
    }, 60000); 
  }

  ngAfterViewInit() {
    this.createLineChart();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  triggerNotification(){
    console.log('notification');
    const notif = this.localNotifications.schedule({
      id: 1,
      text: 'Tiene nueva información acerca de nuestra empresa',
      launch: true,
      vibrate: true,
      data: {data: 'data'}
    });
    console.log('notif',notif);
    
  }

  createLineChart() {
    const ctx = this.lineCanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
        datasets: [{
          label: 'Lunes',
          data: [65, 59, 80, 81, 56, 55, 40, 50, 60],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  }

  updateChart(day: string){

    let newData: number[];
    this.selectedDay = day;
    switch (day) {
      case 'Lunes':
        newData = [65, 59, 80, 81, 56, 55, 40, 50, 60];
        this.fechaDia = 'Lunes, 24 de enero de 2022'
        break;
      case 'Martes':
        newData = [55, 62, 85, 82, 88, 75, 65, 80,75];
        this.fechaDia = 'Martes, 25 de enero de 2022'
        break;
      case 'Miércoles':
        newData = [35, 52, 65, 82, 98, 85, 75, 46, 55];
        this.fechaDia = 'Miércoles, 26 de enero de 2022'
        break;
      case 'Jueves':
        newData = [65, 72, 85, 92, 88, 75, 65, 40, 20];
        this.fechaDia = 'Jueves, 27 de enero de 2022'
        break;
      case 'Viernes':
        newData = [75, 82, 95, 102, 108, 95, 85, 26];
        this.fechaDia = 'Viernes, 28 de enero de 2022'
        break;
      case 'Sábado':
        newData = [85, 92, 105, 112, 118, 105, 95, 90, 91];
        this.fechaDia = 'Sábado, 29 de enero de 2022'
        break;
      case 'Domingo':
        newData = [95, 102, 115, 122, 128, 115, 105, 110, 120];
        this.fechaDia = 'Domingo, 30 de enero de 2022'
        break;
      default:
        newData = [];
    }

    this.chart.data.datasets[0].data = newData;
    this.chart.data.datasets[0].label = this.selectedDay;
    this.chart.update();
  }


}
