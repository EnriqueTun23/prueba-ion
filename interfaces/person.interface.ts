import { Origin  } from './origin.interface';
import { Location } from './location.interface';

export interface Person {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin?: Origin,
    location?: Location,
    episode: string[],
    url: string,
    created: string,
    image: string
}