import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function CityItem({ city }) {
  const {currentCity } = useCities()
  const { cityName, emoji, date, id, position } = city;
  // console.log(position)
  return (
    <li>
      {/* we only add the id just to make the url to only hvae the id at the end. Adding a slash would cause some errors.  */}
      <Link className={`${styles.cityItem} ${id===currentCity.id ? styles["cityItem--active"] : ""}`} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

