import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.css";

const Search = ({ searched, setSearched }) => {
  return (
    <div className="input-search">
      <input
        type="text"
        placeholder="Looking for someone in particular? "
        onChange={(e) => {
          setSearched(e.target.value);
        }}
        value={searched}
      />
      <FontAwesomeIcon icon="magnifying-glass" className="icon" />
    </div>
  );
};

export default Search;
