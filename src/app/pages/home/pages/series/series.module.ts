import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';
import { IdComponent } from './id/id.component';
import {ComponentsModule} from '../../../../components/components.module';


@NgModule({
  declarations: [SeriesComponent, IdComponent],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    ComponentsModule
  ]
})
export class SeriesModule { }
