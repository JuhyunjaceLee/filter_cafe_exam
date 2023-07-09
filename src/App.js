import "./App.css";
import { Routes, Route } from "react-router-dom";
import CafeDetail from "./page/CafeDetail";
import LoginPage from "./page/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/" element={<CafeDetail />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
