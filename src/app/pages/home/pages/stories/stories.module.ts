import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';
import { IdComponent } from './id/id.component';
import {ComponentsModule} from '../../../../components/components.module';


@NgModule({
  declarations: [StoriesComponent, IdComponent],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    ComponentsModule
  ]
})
export class StoriesModule { }
