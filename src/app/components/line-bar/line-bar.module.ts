import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineBarRoutingModule } from './line-bar-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LineBarComponent } from './line-bar.component';


const routes: Routes = [
  {
    path: '',
    component: LineBarComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LineBarRoutingModule,
    RouterModule.forChild(routes)
    
  ],
  exports: [RouterModule],
})

export class LineBarModule { }
