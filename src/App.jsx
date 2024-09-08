import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VehiclePage from "./pages/VehiclePage";

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
