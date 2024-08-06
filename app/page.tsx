'use client'
import { useState } from 'react'
import SubmitForm from '@/components/SubmitForm'
import WeatherTable from '@/components/WeatherTable'
import { columns } from './columns'
import { getWeather } from '@/lib/apiUtils'
import RecentSearches from '@/components/RecentSearches'
import WeatherInfo from '@/components/WeatherInfo'

export default function Home () {
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [weatherData, setweatherData] = useState([])

  const handleGetWeather = async (city: string): Promise<void> => {
    setSelectedCity(city)
    const data = await getWeather(city)
    setweatherData(data)
  }

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className='text-5xl font-bold'>Weather App</h1>
      <SubmitForm handleGetWeather={handleGetWeather}/>
      <RecentSearches handleGetWeather={handleGetWeather} selectedCity={selectedCity}/>
      <WeatherTable columns={columns} data={weatherData}/>
      <WeatherInfo data={weatherData} />
    </main>
  )
}
