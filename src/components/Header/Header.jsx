import "./header.css";
import logo from "../../assets/img/logo-large.png";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="container">
          <img src={logo} alt="logo Marvel" onClick={() => navigate("/")} />
          <div>
            <Link to="/characters">CHARACTERS</Link>
            <Link to="/comics">COMICS</Link>
            <Link to="/favorites">
              <FontAwesomeIcon icon="heart" />
              FAVORITES
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
