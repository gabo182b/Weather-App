import { WeatherInfoProps } from '@/types'
import Image from 'next/image'
import React from 'react'

export default function WeatherInfo ({ data }: WeatherInfoProps) {
  if (!data || data.length === 0 || !data[0].weather) {
    return null
  }
  const weatherDataInfo = data[0].weather
  const { description, icon } = weatherDataInfo
  const weatherIcon = `/icons/${icon}.png`
  return (
    <div className='flex flex-col items-center justify-center'>
      {
        !data
          ? null
          : (
            <>
              <Image alt='wetaher icon' height={120} src={weatherIcon} width={120}
              />
              <h2 className='text-xl font-bold'>{description}</h2>
            </>
          )
      }
    </div>
  )
}
