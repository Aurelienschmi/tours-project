import { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List.jsx";
import styles from "./styles/App.module.css";


const API_ENDPOINT = "https://www.course-api.com/react-tours-project";

export default function App() {
  const [tour, setTour] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfTours, setNumberOfTours] = useState(0);

  const handleRemoveItem = (id) => {
    setTour(tour.filter((item) => item.id !== id));
    setNumberOfTours(numberOfTours - 1);
  }

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios(API_ENDPOINT);
      setTour(data);
      setNumberOfTours(data.length);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tours</h1>

      <hr className={styles.hr} />
      {isLoading && <h2 className={styles.loading}>Loading...</h2>}
      {numberOfTours === 0 && isLoading === false && (
        <>
          <h2 className={styles.noTours}>No tours left</h2>
          <button className={styles.refresh} onClick={() => window.location.reload()}>Refresh Tours</button>
        </>
      )}
      <List list={tour} onRemoveItem={handleRemoveItem}/>
    </div>
  );
}
