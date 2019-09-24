import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StoriesComponent} from './stories.component';
import {IdComponent} from './id/id.component';


const routes: Routes = [
  {
    path: '', component: StoriesComponent
  },
  {
    path: 'stories/:id', component: IdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule {
}
