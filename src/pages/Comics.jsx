import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Cards/Card";

const Characters = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:3000/comics`);
        setComics(response.data.results);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <main className="container">
      <h1>C O M I C S</h1>
      <div className="cards-wrapper">
        {isLoading
          ? "Loading, please wait"
          : comics.map((comic) => {
              return <Card item={comic} type="comic" key={comic._id} />;
            })}
      </div>
    </main>
  );
};
export default Characters;
