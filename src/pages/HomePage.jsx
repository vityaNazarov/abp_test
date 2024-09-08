import { useState, useEffect } from "react";
import { getVehicles } from "../api/dummyAPI";

const HomePage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getVehicles().then(setVehicles);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Автомобили</h1>
      <input
        type="text"
        placeholder="Поиск по названию"
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {filteredVehicles.map((vehicle) => (
          <li key={vehicle.id}>
            <a href={`/vehicles/${vehicle.id}`}>{vehicle.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
