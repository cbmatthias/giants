import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { Schedule } from "./views/Schedule";
import { PlayersList } from "./views/PlayersList";

function App() {
  const style = getStyles();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players-list" element={<PlayersList />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </div>
  );
}

const getStyles = () => ({
  container: {},
});

export default App;
