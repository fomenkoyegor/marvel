import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {MarvelLinks} from '../../interfaces/marvel-links.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mat-header',
  templateUrl: './mat-header.component.html',
  styleUrls: ['./mat-header.component.scss']
})
export class MatHeaderComponent {
  public links = [
    MarvelLinks.characters,
    MarvelLinks.comics,
    MarvelLinks.creators,
    MarvelLinks.events,
    MarvelLinks.series,
    MarvelLinks.stories,
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
  }

}
