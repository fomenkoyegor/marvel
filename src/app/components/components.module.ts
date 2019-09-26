import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {ItemComponent} from './item/item.component';
import {MatButtonModule} from '@angular/material/button';
import {CardComponent} from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatHeaderComponent} from './mat-header/mat-header.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [HeaderComponent, ItemsComponent, ItemComponent, CardComponent, MatHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  exports: [
    HeaderComponent,
    ItemsComponent,
    MatButtonModule,
    CardComponent,
    MatCardModule,
    MatHeaderComponent
  ]
})
export class ComponentsModule {
}
