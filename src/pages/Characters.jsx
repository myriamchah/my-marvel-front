import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/Cards/Card";

const Characters = () => {
  const [chars, setChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:3000/characters`);
        setChars(response.data.results);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <main className="container">
      <h1>C H A R A C T E R S</h1>
      <div className="cards-wrapper">
        {isLoading
          ? "Loading, please wait"
          : chars.map((char) => {
              return (
                <Link
                  to={`/comics/${char._id}`}
                  key={char._id}
                  state={{ name: char.name }}
                >
                  <Card item={char} type="char" />
                </Link>
              );
            })}
      </div>
    </main>
  );
};
export default Characters;
