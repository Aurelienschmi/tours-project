import { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List.jsx";


const API_ENDPOINT = "https://www.course-api.com/react-tours-project";

export default function App() {
  const [tour, setTour] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfTours, setNumberOfTours] = useState(0);

  const handleRemoveItem = (id) => {
    setTour(tour.filter((item) => item.id !== id));
    setNumberOfTours(numberOfTours - 1);
  }

  useEffect(() => {
    axios(API_ENDPOINT)
      .then(( {data} ) => {
        setTour(data);
        setNumberOfTours(data.length);
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        setIsLoading(false);
      });
  }, []);


  return (
    <div>
      <h1>Tours</h1>

      <hr />
      {isLoading && <h1>Loading...</h1>}
      {numberOfTours === 0 && isLoading === false && (
        <>
          <h1>No tours left</h1>
          <button onClick={() => window.location.reload()}>Refresh Tours</button>
        </>
      )}
      <List list={tour} onRemoveItem={handleRemoveItem}/>
    </div>
  );
}
