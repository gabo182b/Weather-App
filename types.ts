import {
  ColumnDef
} from '@tanstack/react-table'

export interface RecentSearchesProps {
  selectedCity: string
  handleGetWeather: (city: string) => Promise<void>;
}

export interface SubmitFormProps {
  handleGetWeather: (city: string) => Promise<void>;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export type CityWeather = {
  city_name: string
  temp: number
  app_temp: number
  wind_spd: number
  uv: number
  datetime: string
  sunrise: string
  sunset: string
  weather: {
    description: string
    icon: string
  }
}

export interface WeatherInfoProps {
  data: CityWeather []
  }
