import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { IdComponent } from './id/id.component';
import {ComponentsModule} from '../../../../components/components.module';




@NgModule({
  declarations: [CharactersComponent, IdComponent, ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    ComponentsModule,

  ]
})
export class CharactersModule { }
