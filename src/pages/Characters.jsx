import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/Cards/Card";
import Search from "../components/Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Characters = ({ toggleFav, favs }) => {
  const [chars, setChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searched, setSearched] = useState("");
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsLoading(true);
        const response = await axios.get(
          `http://localhost:3000/characters?limit=48&name=${searched}&skip=${skip}`
        );
        setChars(response.data.results);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [searched, skip]);

  return (
    <main className="container">
      <h1>C H A R A C T E R S</h1>
      <Search {...{ searched, setSearched, setSkip }} />
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
                  <Card item={char} type="char" {...{ toggleFav, favs }} />
                </Link>
              );
            })}
      </div>
      <div className="pagination">
        <button
          onClick={() => {
            setSkip(skip - 48);
          }}
          disabled={!skip}
        >
          <FontAwesomeIcon icon="backward" />
          &nbsp; Previous page
        </button>
        <button
          onClick={() => {
            setSkip(skip + 48);
          }}
          disabled={chars.length < 48}
        >
          Next page &nbsp;
          <FontAwesomeIcon icon="forward" />
        </button>
      </div>
    </main>
  );
};
export default Characters;
