import { Week } from './week.model';

export class Course {
  constructor (public name: string, public weeks: Week[]) { }
}
