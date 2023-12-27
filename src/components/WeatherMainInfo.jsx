/* eslint-disable react/prop-types */
import styles from './weatherMainInfo.module.css'


export default function WeatherMainInfo({ weather }) {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>
      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`} width='128px' alt={weather?.current.condition.text} />
        </div>
        <div className={styles.conditions}>
          <div className={styles.condition}>{weather?.current.condition.text}
          
            <div className={styles.current}>{weather?.current.temp_c}</div>
          </div>
        </div>
        </div>
        <iframe
          title="mapa"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.5851916551!2d${weather?.location.lon}3!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses-419!2scl!4v1703649628153!5m2!1ses-419!2scl`}
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >


        </iframe>
    </div>
  )
}
