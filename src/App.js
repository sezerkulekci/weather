import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import City from "./City";

function App() {
  const key = "8b27343d4e12b2ed6d4361b87ceb69ef";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Placeholder"
          className="w-[250px] px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relativ bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring "
        />
      </div>
      <City city={city} />
    </div>
  );
}

export default App;
