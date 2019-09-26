export interface Item {
  resourceURI: string;
  name: string;
  type?: string;
  role?: string;
}

interface Entity {
  available?: number;
  collectionURI?: string;
  items?: Item[];
  returned?: number;
}

export interface Url {
  type: string;
  url: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface TextObjects {
  type: string;
  language: string;
  text: string;
}

export interface Base {
  id: number;
  name: string;
  description?: string;
  modified: Date;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription?: string;
  isbn?: string;
  upc?: string;
  diamondCode?: string;
  ean?: string;
  issn?: string;
  format?: string;
  pageCount?: number;
  textObjects: TextObjects[];
  url: Url[];
  variants: Array<any>;
  collections: Array<any>;
  collectedIssues: Array<any>;
  dates: Array<{ type?: string, date?: Date }>;
  prices: Array<{ type: string, price: number }>;
  images?: Array<any>;
  creators: Creators;
  characters: Characters;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  start: Date;
  end: Date;
  next: { resourceURI: string, name: string };
  previous: { resourceURI: string, name: string };
  startYear: Date | number;
  endYear: Date | number;
  rating: string;
  type: string;
  originalIssue: { resourceURI: string, name: string };
}

// tslint:disable-next-line:no-empty-interface
export interface Events extends Entity {
}

// tslint:disable-next-line:no-empty-interface
export interface Stories extends Entity {
}


export interface Series extends Entity {
  resourceURI?: string;
  name?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface Comics extends Entity {
}

// tslint:disable-next-line:no-empty-interface
export interface Characters extends Entity {
}


// tslint:disable-next-line:no-empty-interface
export interface Creators extends Entity {
}
