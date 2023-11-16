import { Link } from "react-router-dom";
import Card from "../components/Cards/Card";

const Favorites = ({ favs }) => {
  return (
    <main className="container">
      <h1>Y O U R &nbsp;F A V O R I T E S</h1>
      <div className="cards-wrapper">
        {favs.map((fav) => {
          return (
            <Link
              to={`/comics/${fav._id}`}
              key={fav._id}
              state={{ name: fav.name }}
            >
              <Card item={fav} type="char" {...{ favs }} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Favorites;
