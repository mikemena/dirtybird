import { Link } from "react-router-dom";
import Logo from "../images/dirtybird1.svg";

const Header = () => {
  return (
    <div className="item">
      <Link to="/">
        <img src={Logo} className="logo"></img>
      </Link>
    </div>
  );
};

export default Header;
