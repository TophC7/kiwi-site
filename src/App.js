import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Info from "./components/info";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  );
}

export default App;
