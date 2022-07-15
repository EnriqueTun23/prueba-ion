import { Person } from './person.interface';
import { Info } from './info.interface';


export interface ResponseData {
    results: Person[],
    info: Info
}