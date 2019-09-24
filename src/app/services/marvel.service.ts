import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Character} from '../interfaces/character';
import {MarvelData, MarvelResponse} from '../interfaces/marvel-response';

export enum links {
  characters = 'characters',
  comics = 'comics',
}

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private readonly url = 'https://gateway.marvel.com/v1/public/';
  public charactersTotal = 1492;
  public charactersPaginate: MarvelData = {
    offset: 0,
    limit: 36,
  };


  private createUrl(entity: string, params = {}): string {
    let paramsString = '';
    // tslint:disable-next-line:forin
    for (const param in params) {
      paramsString += `&${param}=${params[param]}`;
    }
    return `${this.url}${entity}?${paramsString}`;
  }

  constructor(
    private http: HttpClient
  ) {
    // console.log(this.createUrl('characters'))
  }

  public onGetCharacters(page = 1): Observable<Character[]> {
    if (page === 1) {
      this.charactersPaginate.offset = 0;
    } else {
      this.charactersPaginate.offset = page * this.charactersPaginate.limit;
    }

    console.log(this.createUrl('characters', this.charactersPaginate));
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
