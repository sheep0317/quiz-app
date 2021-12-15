import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import {NgxPaginationModule} from 'ngx-pagination';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    DonutChartComponent,
    LineChartComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
    NgxPaginationModule,
    CountdownModule
  ],
  exports: [
    DonutChartComponent,
    LineChartComponent,
    ChartsModule,
    NgxPaginationModule,
    CountdownModule
  ]
})
export class UiComponentModule { }
