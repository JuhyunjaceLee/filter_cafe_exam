import "./App.css";
import { Routes, Route } from "react-router-dom";
import CafeDetail from "./page/CafeDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/" element={<CafeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
