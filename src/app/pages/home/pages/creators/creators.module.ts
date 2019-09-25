import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorsRoutingModule } from './creators-routing.module';
import { CreatorsComponent } from './creators.component';
import { IdComponent } from './id/id.component';
import {ComponentsModule} from '../../../../components/components.module';


@NgModule({
  declarations: [CreatorsComponent, IdComponent],
  imports: [
    CommonModule,
    CreatorsRoutingModule,
    ComponentsModule
  ]
})
export class CreatorsModule { }
