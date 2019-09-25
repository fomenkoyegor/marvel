import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { IdComponent } from './id/id.component';
import {ComponentsModule} from '../../../../components/components.module';


@NgModule({
  declarations: [EventsComponent, IdComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ComponentsModule
  ]
})
export class EventsModule { }
