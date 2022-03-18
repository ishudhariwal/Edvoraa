import {useContext, useEffect} from "react";
import EdvoraContext from "../../context/edvora/EdvoraContext";
import "./Navbar.scss";

const Navbar = () => {
  const context = useContext(EdvoraContext);
  const {user, getuser, getrides} = context;
  useEffect(() => {
    getuser();
    getrides();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="navbar">
      <div className="left">Edvora</div>
      <div className="right">
        <div className="name">{user.name}</div>
        <div className="image-container">
          <img src={user.url} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
