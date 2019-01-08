import { Location } from './location';
import { Current } from './current';
import { ForecastDay } from './forecast-day';

export interface Forecast {
  location: Location;
  current: Current;
  forecast: {
    forecastday: ForecastDay[];
  };
}
