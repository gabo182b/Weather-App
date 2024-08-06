'use client'
import { useEffect, useState } from 'react'
import { RecentSearchesProps } from '@/types'

export default function RecentSearches ({ selectedCity, handleGetWeather }: RecentSearchesProps) {
  const [lastSearches, setLastSearches] = useState <string[]>([])

  useEffect(() => {
    if (selectedCity) {
      setLastSearches((prevSearches) => {
        if (prevSearches.includes(selectedCity)) {
          return prevSearches
        }
        const updatedSearches = [...prevSearches, selectedCity]
        const maxRecentSearches = 5
        return updatedSearches.slice(-maxRecentSearches)
      })
    }
  }, [selectedCity])

  return (
    <>
      {
        lastSearches.length > 0
          ? (
            <div className='flex flex-col items-center justify-center p-2 mb-8 border-2 rounded-lg w-52'>
              <h2 className='w-full pb-2 font-bold text-center border-b'>Recent searches</h2>
              <ul>
                {
                  lastSearches.map((search) => (
                    <li className='text-center border-b' key={search}>
                      <button
                        className='p-2 transition duration-200 transform hover:scale-110 hover:text-slate-800'
                        onClick={() => handleGetWeather(search)}
                      >
                        {search}
                      </button>
                    </li>
                  ))
                }
              </ul>

            </div>
          )
          : null
      }
    </>
  )
}
