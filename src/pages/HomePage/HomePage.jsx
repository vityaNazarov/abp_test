import css from "./HomePage.module.css";
import { useState, useEffect } from "react";
import { getVehicles } from "../../api/dummyAPI";

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
    <div className={css.container}>
      <h1 className={css.title}>Автомобили</h1>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Поиск по названию"
        value={search}
        onChange={handleSearch}
      />
      <ul className={css.vehicleList}>
        {filteredVehicles.map((vehicle) => (
          <li className={css.vehicleItem} key={vehicle.id}>
            <a className={css.vehicleLink} href={`/vehicles/${vehicle.id}`}>
              {vehicle.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
