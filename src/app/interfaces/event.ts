import {Characters, Comics, Creators, Series, Stories, Thumbnail, Url} from './marvel-entity';

export interface Event {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Url[];
  modified: Date;
  start: Date;
  end: Date;
  thumbnail: Thumbnail;
  creators: Creators;
  characters: Characters;
  stories: Stories;
  comics: Comics;
  series: Series;
  next: { resourceURI: string, name: string };
  previous: { resourceURI: string, name: string };
}





