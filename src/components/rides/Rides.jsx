import {useContext} from "react";
import EdvoraContext from "../../context/edvora/EdvoraContext";
import Ridecard from "../ridecard/Ridecard";
import "./Rides.scss";

const Rides = () => {
  const context = useContext(EdvoraContext);
  const {rides} = context;

  return (
    <div className="rides">
      {rides.map((ride, key) => {
        return (
          <Ridecard
            key={key}
            rideid={ride.id}
            oscode={ride.origin_station_code}
            path={JSON.stringify(ride.station_path)}
            date={ride.date}
            distance={ride.distance}
            map={ride.map_url}
            state={ride.state}
            city={ride.city}
          />
        );
      })}
    </div>
  );
};

export default Rides;
