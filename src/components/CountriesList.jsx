import CountryItem from "./CountryItem";
import styles from "./CountriesList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

export default function CountriesList() {
  const {cities, isLoading} = useCities()

  if (isLoading === undefined) {
    // Handle the case where isLoading is undefined
    return null; // or any default behavior
  }
  // if (isLoading) return <Spinner />;
  if (isLoading) {
    return <Spinner />; // or any loading indicator component
  }

  if (!cities) {
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    ); // or any message for no data
  }

  const countries = cities.reduce((arr, city) => {
    {
      if (!arr.map((el) => el.country).includes(city.country)) {
        return [...arr, { country: city.country, emoji: city.emoji }];
      } else return arr;
    }
  }, []);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        // remember to remove the duplicated
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
