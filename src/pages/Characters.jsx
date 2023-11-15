import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Characters/Card";

const Characters = () => {
  const [chars, setChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:3000/characters`);
        setChars(response.data.results);
        console.log(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <main className="container">
      {isLoading
        ? "Loading, please wait"
        : chars.map((char) => {
            return <Card {...{ char }} key={char.id} />;
          })}
    </main>
  );
};
export default Characters;
