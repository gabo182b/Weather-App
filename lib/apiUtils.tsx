const WEATHER_API = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export const getWeather = async (cityName: string) => {
  const city = JSON.stringify(cityName)
  const URL = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${WEATHER_API}`
  try {
    const response = await fetch(URL)
    const result = await response.json()
    const data = result.data
    return data
  } catch (error) {
    console.log(error)
  }
}
