import {Characters, Creators, Events, Series, Stories, TextObjects, Thumbnail, Url} from './marvel-entity';

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription?: string;
  description?: string;
  modified: string;
  isbn?: string;
  upc?: string;
  diamondCode?: string;
  ean?: string;
  issn?: string;
  format?: string;
  pageCount?: number;
  textObjects: TextObjects[];
  resourceURI: string;
  url: Url[];
  series: Series;
  variants: Array<any>;
  collections: Array<any>;
  collectedIssues: Array<any>;
  dates: Array<{ type?: string, date?: Date }>;
  prices: Array<{ type: string, price: number }>;
  thumbnail: Thumbnail;
  images?: Array<any>;
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}
