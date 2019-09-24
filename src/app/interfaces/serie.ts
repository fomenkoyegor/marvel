import {Characters, Comics, Creators, Events, Stories, Thumbnail, Url} from './marvel-entity';

export interface Serie {
  id: string;
  title: string;
  description?: string;
  resourceURI: string;
  urls: Url[];
  startYear: Date | number;
  endYear: Date | number;
  rating: string;
  type: string;
  modified: Date;
  thumbnail: Thumbnail;
  creators: Creators;
  characters: Characters;
  stories: Stories;
  comics: Comics;
  events: Events;
  next?: { resourceURI: string, name: string };
  previous?: { resourceURI: string, name: string };
}


