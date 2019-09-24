import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SeriesComponent} from './series.component';
import {IdComponent} from './id/id.component';


const routes: Routes = [
  {
    path: '', component: SeriesComponent
  },
  {
    path: 'series/:id', component: IdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule {
}
