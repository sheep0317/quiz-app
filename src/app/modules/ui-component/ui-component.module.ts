import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DonutChartComponent,
    LineChartComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    DonutChartComponent,
    LineChartComponent,
    ChartsModule
  ]
})
export class UiComponentModule { }
