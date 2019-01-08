import { Location } from './location';
import { Current } from './current';

export interface Weather {
  location: Location;
  current: Current;
}
