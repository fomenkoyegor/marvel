import {Characters, Comics, Creators, Events, Series, Thumbnail} from './marvel-entity';

export interface Storie {
  id: number;
  title: string;
  description?: string;
  resourceURI: string;
  type: string;
  modified: Date;
  thumbnail?: Thumbnail;
  creators: Creators;
  characters: Characters;
  series: Series;
  comics: Comics;
  events: Events;
  originalIssue: { resourceURI: string, name: string };
}



