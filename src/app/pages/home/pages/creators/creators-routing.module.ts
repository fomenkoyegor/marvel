import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreatorsComponent} from './creators.component';
import {IdComponent} from './id/id.component';


const routes: Routes = [
  {
    path: '', component: CreatorsComponent
  },
  {
    path: 'creators/:id', component: IdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorsRoutingModule {
}
