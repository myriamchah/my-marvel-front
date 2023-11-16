import { Link } from "react-router-dom";
import Card from "../components/Cards/Card";

const Favorites = ({ toggleFav, favs }) => {
  return (
    <main className="container">
      <h1>Y O U R &nbsp;F A V O R I T E S</h1>
      <h2>{favs[0].length} Characters</h2>
      <div className="cards-wrapper">
        {favs[0].map((fav) => {
          return (
            <Link
              to={`/comics/${fav._id}`}
              key={fav._id}
              state={{ name: fav.name }}
            >
              <Card
                item={fav}
                type="char"
                {...{ favs }}
                key={fav._id}
                {...{ toggleFav, favs }}
              />
            </Link>
          );
        })}
      </div>

      <h2>{favs[1].length} Comics</h2>
      <div className="cards-wrapper">
        {favs[1].map((fav) => {
          return (
            <Card
              item={fav}
              type="comic"
              {...{ favs }}
              key={fav._id}
              {...{ toggleFav, favs }}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Favorites;
