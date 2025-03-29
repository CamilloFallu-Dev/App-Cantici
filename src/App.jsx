import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import ListaCantici from "./Component/ListaCantici";
import Cantico from "./Component/Cantico";
import Homepage from "./Component/Homepage";
import Audio from "./Component/Audio";
// import Contatti from "./Component/Contatti";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/lista-cantici" element={<ListaCantici />} />
          <Route path="/cantico/:id" element={<Cantico />} />
          <Route path="/audio" element={<Audio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
