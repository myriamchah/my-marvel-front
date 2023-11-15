import "./header.css";
import logo from "../../assets/img/logo-large.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <img src={logo} alt="logo Marvel" />
        </div>
      </header>
    </>
  );
};

export default Header;
