import { Component, Input, OnInit, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
//import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';




@Component({
  selector: 'app-line-bar',
  templateUrl: './line-bar.component.html',
  styleUrls: ['./line-bar.component.scss'],
})
export class LineBarComponent implements AfterViewInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  private chart: any;
  private chartInitialized = false;

 
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.createLineChart();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

 

  createLineChart() {
    const ctx = this.lineCanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  }

  updateChart(){
    const newData = [45, 62, 75, 92, 78, 65, 55];
    this.chart.data.datasets[0].data = newData;
    this.chart.update();
  }


}
