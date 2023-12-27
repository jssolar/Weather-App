/* eslint-disable no-undef */
import { useEffect, useState } from "react"
import WeatherForm from "./WeatherForm"
import WeatherMainInfo from "./WeatherMainInfo"
import styles from './weatherApp.module.css'
import Loading from "./Loading"

function WeatherApp() {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    loadInfo()
  }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name}`
  }, [weather])
  async function loadInfo(city = 'london') {
    try {
      const request = await fetch(`${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY}&q=${city}`)
      const json = await request.json()

      setTimeout(() => {
        setWeather(json)
      }, 1000);

      // console.log(json)
    } catch (error) {
      console.log(error)
    }
  }

  function handleChangeCity(city) {
    setWeather(null)
    loadInfo(city)
  }

  return (
    <>
      <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity={handleChangeCity} />
        {weather? <WeatherMainInfo weather={weather} /> : <Loading />


        }
      </div>
    </>
  )
}

export default WeatherApp