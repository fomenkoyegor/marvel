import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorsRoutingModule } from './creators-routing.module';
import { CreatorsComponent } from './creators.component';
import { IdComponent } from './id/id.component';


@NgModule({
  declarations: [CreatorsComponent, IdComponent],
  imports: [
    CommonModule,
    CreatorsRoutingModule
  ]
})
export class CreatorsModule { }
