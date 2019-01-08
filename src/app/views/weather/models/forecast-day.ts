import { Day } from './day';

export interface ForecastDay {
  date: string;
  date_epoch: number;
  day: Day;
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
  };
}
