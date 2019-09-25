import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { IdComponent } from './id/id.component';
import {ComponentsModule} from '../../../../components/components.module';


@NgModule({
  declarations: [ComicsComponent, IdComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    ComponentsModule
  ]
})
export class ComicsModule { }
