import CityItem from './CityItem';
import styles from './CityList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';
export default function CityList() {
    //u
    const {cities, isLoading} = useCities()

    if (isLoading === undefined) {
        // Handle the case where isLoading is undefined
        return null; // or any default behavior
    }
    // if (isLoading) return <Spinner />;
    if (isLoading) {
        
        return <Spinner />; // or any loading indicator component
    }

    if (!cities || cities.length === 0) {
        return <Message message='Add your first city by clicking on a city on the map' />; // or any message for no data
    }
    return (
        <ul className={styles.cityList}>
            
            {cities && cities.map((city) => (<CityItem city={city} key={city.id} />))}
        </ul>
    );
}

