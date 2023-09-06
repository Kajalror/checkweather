import { useState, useEffect } from "react";
// import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState(" ");
  // const apiKey = "4b59637691e2a1286455cfc891ee16ad";
  const getWeatherDetails = async (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},in&APPID=4b59637691e2a1286455cfc891ee16ad`;
    const response = await fetch(url);
    console.log(response);
    const resJson = await response.json();
    setData(resJson);
    console.log(resJson, "===");
  };
  useEffect(() => {
    getWeatherDetails(inputCity);
  }, []);
  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
    console.log("value ", e.target.value);
  };
  const handleSearch = () => {
    getWeatherDetails(inputCity);
    console.log("==>>", inputCity);
  };
  return (
    <div className="App">
      <div className=" col-md-12">
        <div className=" weatherBg">
          <h1 className=" heading"> Check The Weather </h1>
          <div className=" d-grid d-flex col-4 mt-4 gap-3">
            <input
              type="text"
              placeholder="search city"
              className="form-control"
              value={inputCity}
              onChange={handleChangeInput}
            />
            <button
              className="btn btn-primary"
              type=" button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <div className="col-md-12 text-center mt-4 mb-5">
            <div className="shadow rounded weatherResultBox">
              <img
                src="http://www.psdgraphics.com/file/weather-icon.jpg"
                className=" weatherIcon mt-2"
              />
              <h4 className="weatherCity mt-3"> {data.name} </h4>
              <h5 className="weatherTemp"> {data?.main?.temp - 273.15} °C </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
