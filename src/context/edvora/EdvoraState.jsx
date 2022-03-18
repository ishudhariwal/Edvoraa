import React, {useState} from "react";
import EdvoraContext from "./EdvoraContext";

const EdvoraState = (props) => {
  const [filteropen, setFilteropen] = useState(false);
  const [Uprides, setUprides] = useState([]);
  const [Parides, setParides] = useState([]);
  const [user, setuser] = useState({station_code: 0, name: "", url: ""});
  const [rides, setrides] = useState([]);
  const [ridedata, setRidedata] = useState([]);
  function GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  }

  const getuser = async () => {
    let data = await fetch("https://assessment.api.vweb.app/user");
    let parseddata = await data.json();
    setuser(parseddata);
  };
  const getrides = async () => {
    let data = await fetch("https://assessment.api.vweb.app/rides");
    let parseddata = await data.json();
    for (let i = 0; i < parseddata.length; i++) {
      let patharray = parseddata[i].station_path;
      let distance = 1000000;

      for (let j = 0; j < patharray.length; j++) {
        distance = Math.min(Math.abs(patharray[j] - user.station_code), distance);
      }
      parseddata[i].distance = distance;
    }
    parseddata.sort(GetSortOrder("distance"));
    let Updata = parseddata.filter((ride) => {
      return new Date(ride.date) - new Date() > 0;
    });
    setUprides(Updata);
    let Padata = parseddata.filter((ride) => {
      return new Date(ride.date) - new Date() <= 0;
    });
    setParides(Padata);
    setRidedata(parseddata);
    setrides(parseddata);
  };
  return (
    <EdvoraContext.Provider
      value={{
        user,
        setuser,
        rides,
        setrides,
        getuser,
        getrides,
        Uprides,
        Parides,
        filteropen,
        setFilteropen,
        ridedata,
        setRidedata,
      }}>
      {props.children}
    </EdvoraContext.Provider>
  );
};

export default EdvoraState;
