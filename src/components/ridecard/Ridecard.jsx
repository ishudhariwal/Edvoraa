import "./Ridecard.scss";

const Ridecard = ({rideid, oscode, path, date, distance, map, state, city}) => {
  return (
    <div className="ridecard">
      <div className="left">
        <img src={map} alt="" />
        <div className="content">
          <p>Ride Id : {rideid}</p>
          <p>Origin Station : {oscode}</p>
          <p>station_path: {path}</p>
          <p>Date: {date}</p>
          <p>Distance: {distance}</p>
        </div>
      </div>
      <div className="right">
        <p>{city}</p>
        <p>{state}</p>
      </div>
    </div>
  );
};

export default Ridecard;
