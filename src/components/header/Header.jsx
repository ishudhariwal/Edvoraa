import "./Header.scss";
import SortIcon from "@mui/icons-material/Sort";
import EdvoraContext from "../../context/edvora/EdvoraContext";
import {useContext, useState} from "react";

const Header = () => {
  const [nearestactive, setNearestactive] = useState(true);
  const [upcomingactive, setUpcomingactive] = useState(false);
  const [pastactive, setPastactive] = useState(false);
  const context = useContext(EdvoraContext);
  const {setrides, getrides, Uprides, Parides, setFilteropen, filteropen} = context;
  const handleNearestClick = async () => {
    setNearestactive(true);
    setUpcomingactive(false);
    setPastactive(false);
    getrides();
  };
  const handleUpcomingClick = async () => {
    setNearestactive(false);
    setUpcomingactive(true);
    setPastactive(false);
    setrides(Uprides);
  };
  const handlePastClick = async () => {
    setNearestactive(false);
    setUpcomingactive(false);
    setPastactive(true);
    setrides(Parides);
  };
  const handlefilterclick = () => {
    setFilteropen(!filteropen);
  };
  return (
    <div className="header">
      <div className="left">
        <button
          id={nearestactive === true ? "active" : "notactive"}
          onClick={handleNearestClick}
          className="nearest">
          Nearest rides
        </button>
        <button
          id={upcomingactive === true ? "active" : "notactive"}
          onClick={handleUpcomingClick}
          className="upcoming">
          Upcoming rides ({Uprides.length})
        </button>
        <button
          id={pastactive === true ? "active" : "notactive"}
          onClick={handlePastClick}
          className="past">
          Past rides ({Parides.length})
        </button>
      </div>
      <div className="right" onClick={handlefilterclick}>
        <div className="icon">
          <SortIcon />
        </div>
        <div className="filter-text">Filter</div>
      </div>
    </div>
  );
};

export default Header;
