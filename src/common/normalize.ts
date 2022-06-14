import {NormalizedData} from './types';

export function normalize<T extends {id: string}>(data: T[]): NormalizedData<T> {
  return {
    data: data,
    byId: data.reduce((acc: {[id: string]: T}, i: T) => ({...acc, [i.id]: i}), {}),
    allIds: data.reduce((acc: string[], i: T) => [...acc, i.id], []),
  };
}
