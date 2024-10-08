import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VehiclePage from "./pages/VehiclePage/VehiclePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicles/:vehicleId" element={<VehiclePage />} />
      </Routes>
    </Router>
  );
};

export default App;
