
export interface MarvelData {
  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
  results?: Array<any>;
}

export interface MarvelResponse {
  code?: number;
  status?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  etag?: string;
  data: MarvelData;
}
