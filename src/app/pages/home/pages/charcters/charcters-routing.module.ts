import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharctersComponent } from './charcters.component';


const routes: Routes = [
  {
    path: '', component: CharctersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharctersRoutingModule { }
