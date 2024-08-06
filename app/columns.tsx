import { CityWeather } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import { parse, format } from 'date-fns'

export const columns: ColumnDef<CityWeather>[] = [
  {
    accessorKey: 'city_name',
    header: 'City'
  },
  {
    accessorKey: 'temp',
    header: 'Temperature',
    cell: ({ row }) => (<p>{row.getValue('temp')} ºC</p>)
  },
  {
    accessorKey: 'app_temp',
    header: 'Feels like',
    cell: ({ row }) => (<p>{row.getValue('app_temp')} ºC</p>)
  },
  {
    accessorKey: 'wind_spd',
    header: 'Wind speed',
    cell: ({ row }) => (<p>{row.getValue('wind_spd')} km/h</p>)
  },
  {
    accessorKey: 'uv',
    header: 'UV Index'
  },
  {
    accessorKey: 'datetime',
    header: 'Time',
    cell: ({ row }) => {
      const date: string = row.getValue('datetime')
      const parsedDate = parse(date, 'yyyy-MM-dd:HH', new Date())
      const formattedDate = format(parsedDate, 'EEEE, MM/dd/yyyy \'at\' hh:mm a')
      return <p>{formattedDate}</p>
    }
  },
  {
    accessorKey: 'sunrise',
    header: 'Sunrise'
  },
  {
    accessorKey: 'sunset',
    header: 'Sunset'
  }

]
