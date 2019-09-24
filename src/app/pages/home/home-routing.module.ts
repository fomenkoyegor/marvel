import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: '', redirectTo: 'characters'},
      {
        path: 'characters',
        loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule)
      },
      {
        path: 'characters/:id', redirectTo: 'characters/characters/:id'
      },
      {
        path: 'comics',
        loadChildren: () => import('./pages/comics/comics.module').then(m => m.ComicsModule)
      },
      {
        path: 'comics/:id', redirectTo: 'comics/comics/:id'
      },
      {
        path: 'creators',
        loadChildren: () => import('./pages/creators/creators.module').then(m => m.CreatorsModule)
      },
      {
        path: 'creators/:id', redirectTo: 'creators/creators/:id'
      },
      {
        path: 'events',
        loadChildren: () => import('./pages/events/events.module').then(m => m.EventsModule)
      },
      {
        path: 'series',
        loadChildren: () => import('./pages/series/series.module').then(m => m.SeriesModule)
      },
      {
        path: 'stories',
        loadChildren: () => import('./pages/stories/stories.module').then(m => m.StoriesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
