import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

import Card from "../components/Cards/Card";

const CharactersComics = ({ toggleFav, favs }) => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const charId = params.charId;
  const location = useLocation();
  const { name } = location.state;

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsLoading(true);
        const response = await axios.get(
          `https://site--backend-marvel--rv77lmsyy8s9.code.run/comics/${charId}`
        );
        setComics(response.data.comics);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [charId]);

  return (
    <main className="container">
      <h1> {name} 's C O M I C S</h1>
      <div className="cards-wrapper">
        {isLoading
          ? "Loading, please wait"
          : comics &&
            comics.map((comic) => {
              return (
                <Card
                  key={comic._id}
                  item={comic}
                  type="comic"
                  {...{ toggleFav, favs }}
                />
              );
            })}
      </div>
    </main>
  );
};

export default CharactersComics;
