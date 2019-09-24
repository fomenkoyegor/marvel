import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';
import { IdComponent } from './id/id.component';


@NgModule({
  declarations: [StoriesComponent, IdComponent],
  imports: [
    CommonModule,
    StoriesRoutingModule
  ]
})
export class StoriesModule { }
