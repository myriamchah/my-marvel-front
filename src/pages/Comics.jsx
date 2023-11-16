import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Cards/Card";
import Search from "../components/Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searched, setSearched] = useState("");
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsLoading(true);
        const response = await axios.get(
          `http://localhost:3000/comics?limit=8&title=${searched}`
        );
        setComics(response.data.results);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [searched, skip]);

  return (
    <main className="container">
      <h1>C O M I C S</h1>
      <Search {...{ searched, setSearched, setSkip }} />
      <div className="cards-wrapper">
        {isLoading
          ? "Loading, please wait"
          : comics.map((comic) => {
              return <Card item={comic} type="comic" key={comic._id} />;
            })}
      </div>
      <div className="pagination">
        <button
          onClick={() => {
            setSkip(skip - 8);
          }}
          disabled={!skip}
        >
          <FontAwesomeIcon icon="backward" />
          &nbsp; Previous page
        </button>
        <button
          onClick={() => {
            setSkip(skip + 8);
          }}
          disabled={comics.length < 8}
        >
          Next page &nbsp;
          <FontAwesomeIcon icon="forward" />
        </button>
      </div>
    </main>
  );
};
export default Comics;
