import { Link } from "react-router-dom";
import "./cards.css";

const Card = ({ char }) => {
  return (
    <Link to={`/comics/${char._id}`}>
      <div className="char-card">
        <img
          src={char.thumbnail.path + "." + char.thumbnail.extension}
          alt={char.name}
        />
        <div>{char.name}</div>
        <p>{char.description}</p>
      </div>
    </Link>
  );
};
export default Card;
