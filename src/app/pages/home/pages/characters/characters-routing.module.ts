import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CharactersComponent} from './characters.component';
import {IdComponent} from './id/id.component';


const routes: Routes = [
  {
    path: '', component: CharactersComponent
  },
  {
    path: 'characters/:id', component: IdComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule {
}
