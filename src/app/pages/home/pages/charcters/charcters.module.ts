import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharctersRoutingModule } from './charcters-routing.module';
import { CharctersComponent } from './charcters.component';


@NgModule({
  declarations: [CharctersComponent],
  imports: [
    CommonModule,
    CharctersRoutingModule
  ]
})
export class CharctersModule { }
