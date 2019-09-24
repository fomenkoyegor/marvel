interface Item {
  resourceURI: string;
  name: string;
  type?: string;
}

interface Entity {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Url {
  type: string;
  url: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

// tslint:disable-next-line:no-empty-interface
export interface Events extends Entity {
}

// tslint:disable-next-line:no-empty-interface
export interface Stories extends Entity {
}

// tslint:disable-next-line:no-empty-interface
export interface Series extends Entity {
}

// tslint:disable-next-line:no-empty-interface
export interface Comics extends Entity {
}

// tslint:disable-next-line:no-empty-interface
export interface Characters extends Entity {
}
