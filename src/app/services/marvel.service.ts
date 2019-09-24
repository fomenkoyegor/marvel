import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Character} from '../interfaces/character';
import {MarvelData, MarvelResponse} from '../interfaces/marvel-response';
import {Comic} from '../interfaces/comic';
import {Creator} from '../interfaces/creator';
import {Event} from '../interfaces/event';
import {Serie} from '../interfaces/serie';
import {Storie} from '../interfaces/storie';

export enum links {
  characters = 'characters',
  comics = 'comics',
  creators = 'creators',
  events = 'events',
  series = 'series',
  stories = 'stories',
}

export enum Total {
  characters = 1492,
  comics = 45292,
  creators = 5196,
  events = 75,
  series = 11234,
  stories = 102536,
}

@Injectable({
  providedIn: 'root'
})


export class MarvelService {

  constructor(
    private http: HttpClient
  ) {
    // console.log(this.createUrl('characters'))
    // console.log(this.createUrl('characters', this.charactersPaginate));
  }

  private readonly url = 'https://gateway.marvel.com/v1/public/';
  public charactersTotal = 1492;
  public charactersPaginate: MarvelData = {
    offset: 0,
    limit: 36,
  };
  public comicsPaginate: MarvelData = {
    offset: 0,
    limit: 12
  };

  public creatorsPaginate: MarvelData = {
    offset: 0,
    limit: 24
  };

  public eventsPaginate: MarvelData = {
    offset: 0,
    limit: 5
  };

  public seriesPaginate: MarvelData = {
    offset: 0,
    limit: 72
  };

  public storiesPaginate: MarvelData = {
    offset: 0,
    limit: 36
  };


  getId(entity: string): number {
    const entityArr = entity.split('/');
    return +(entityArr[entityArr.length - 1]);
  }

  private createUrl(entity: string, params = {}): string {
    let paramsString = '';
    // tslint:disable-next-line:forin
    for (const param in params) {
      paramsString += `&${param}=${params[param]}`;
    }
    return `${this.url}${entity}?${paramsString}`;
  }


  public onGetStories(page = 1): Observable<Storie[]> {
    return this.http.get<MarvelResponse>(this.createUrl(links.stories, this.storiesPaginate))
      .pipe(
        map((res: MarvelResponse) => res.data.results)
      );
  }

  public onGetStorie(id): Observable<Storie> {
    return this.http.get<MarvelResponse>(this.createUrl(`${links.stories}/${id}`))
      .pipe(
        map((res: MarvelResponse) => res.data.results[0])
      );
  }


  public onGetSeries(page = 1): Observable<Serie[]> {
    return this.http.get<MarvelResponse>(this.createUrl(links.series, this.seriesPaginate))
      .pipe(
        map((res: MarvelResponse) => res.data.results)
      );
  }

  public onGetSerie(id): Observable<Serie> {
    return this.http.get<MarvelResponse>(this.createUrl(`${links.series}/${id}`))
      .pipe(
        map((res: MarvelResponse) => res.data.results[0])
      );
  }


  public onGetEvents(page = 1): Observable<Event[]> {
    return this.http.get<MarvelResponse>(this.createUrl(links.events, this.eventsPaginate))
      .pipe(
        map((res: MarvelResponse) => res.data.results)
      );
  }

  public onGetEvent(id): Observable<Event> {
    return this.http.get<MarvelResponse>(this.createUrl(`${links.events}/${id}`))
      .pipe(
        map((res: MarvelResponse) => res.data.results[0])
      );
  }

  public onGetCreators(page = 1): Observable<Creator[]> {
    return this.http.get<MarvelResponse>(this.createUrl(links.creators, this.creatorsPaginate))
      .pipe(
        map((res: MarvelResponse) => res.data.results)
      );
  }

  public onGetCreator(id): Observable<Creator> {
    return this.http.get<MarvelResponse>(this.createUrl(`${links.creators}/${id}`))
      .pipe(
        map((res: MarvelResponse) => res.data.results[0])
      );
  }

  public onGetComics(page = 1): Observable<Comic[]> {
    return this.http.get<MarvelResponse>(this.createUrl(links.comics, this.comicsPaginate))
      .pipe(
        map((res: MarvelResponse) => res.data.results)
      );
  }

  public onGetComic(id): Observable<Comic> {
    return this.http.get<MarvelResponse>(this.createUrl(`${links.comics}/${id}`))
      .pipe(
        map((res: MarvelResponse) => res.data.results[0])
      );
  }

  public onGetCharacters(page = 1): Observable<Character[]> {
    if (page === 1) {
      this.charactersPaginate.offset = 0;
    } else {
      this.charactersPaginate.offset = page * this.charactersPaginate.limit;
    }
    return this.http.get<MarvelResponse>(this.createUrl(links.characters, this.charactersPaginate))
      .pipe(
        map((res: MarvelResponse) => res.data.results)
      );
  }

  public onGetCharacter(id): Observable<Character> {
    return this.http.get<MarvelResponse>(this.createUrl(`characters/${id}`))
      .pipe(
        map((res: MarvelResponse) => res.data.results[0])
      );
  }
}
