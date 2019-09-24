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
