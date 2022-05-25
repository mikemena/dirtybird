import { Link } from "react-router-dom";
import Logo from "../images/dirtybird1.svg";

const Header = () => {
  return (
    <Link to="/">
      <div className="item">
        <img src={Logo} className="logo"></img>
      </div>
    </Link>
  );
};

export default Header;
