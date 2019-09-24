import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventsComponent} from './events.component';
import {IdComponent} from './id/id.component';


const routes: Routes = [
  {
    path: '', component: EventsComponent
  },
  {
    path: 'events/:id', component: IdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
}
