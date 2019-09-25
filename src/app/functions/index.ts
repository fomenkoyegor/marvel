import {Item, Thumbnail} from '../interfaces/marvel-entity';

export function getResorceName(item): string {
  const entityArr = item.resourceURI.split('/');
  return (entityArr[entityArr.length - 2]);
}

export function getId(item: Item): number {
  const entityArr = item.resourceURI.split('/');
  return +(entityArr[entityArr.length - 1]);
}

export function getImage(thumbnail: Thumbnail): string {
  return `${thumbnail.path}.${thumbnail.extension}`;
}
