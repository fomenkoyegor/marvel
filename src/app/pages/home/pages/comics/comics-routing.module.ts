import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ComicsComponent} from './comics.component';
import {IdComponent} from './id/id.component';


const routes: Routes = [
  {
    path: '', component: ComicsComponent
  },
  {
    path: 'comics/:id', component: IdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule {
}
