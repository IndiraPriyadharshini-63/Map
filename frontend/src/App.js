import { useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Room, Star } from "@mui/icons-material";
import "./App.css";
import axios from "axios";

function App() {
  const [pins, setPins] = useState([]);
  const [viewport, setViewport] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 4,
  });
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const getPins = async () => {
      try {
        const allPins = await axios.get("/pins");
        console.log(allPins);

        setPins(allPins.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPins();
  }, []);

  return (
    <div className="App">
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        initialViewState={viewport}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {pins.map((p) => (
          <Marker longitude={78.042068} latitude={27.173891} anchor="bottom">
            <Room style={{ fontSize: viewport.zoom * 7, color: "slateblue" }} />
          </Marker>
        ))}
      </Map>
    </div>
  );
}

export default App;

{
  /* <Popup
          latitude={48.858093}
          longitude={2.294694}
          closeButton={true}
          closeOnClick={false}
          anchor="left"
        >
          <div className="card">
            <label>Place</label>
            <h4 className="place">Eiffel Tower</h4>
            <label>Review</label>
            <p className="desc">Beautiful place. I like it</p>
            <label>Rating</label>
            <div className="stars">
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
            </div>
            <label>Information</label>
            <span className="username">
              {" "}
              Created By <b>aaa</b>
            </span>
            <span className="date"> 1 hour ago</span>
          </div>
        </Popup> */
}
