import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,children:[
      {path:'',redirectTo:'charcters'},
      {
        path:'charcters',
        loadChildren:()=>import('./pages/charcters/charcters.module').then(m=>m.CharctersModule)
      },
      {
        path:'comics',
        loadChildren:()=>import('./pages/comics/comics.module').then(m=>m.ComicsModule)
      },
      {
        path:'creators',
        loadChildren:()=>import('./pages/creators/creators.module').then(m=>m.CreatorsModule)
      },
      {
        path:'events',
        loadChildren:()=>import('./pages/events/events.module').then(m=>m.EventsModule)
      },
      {
        path:'series',
        loadChildren:()=>import('./pages/series/series.module').then(m=>m.SeriesModule)
      },
      {
        path:'stories',
        loadChildren:()=>import('./pages/stories/stories.module').then(m=>m.StoriesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
