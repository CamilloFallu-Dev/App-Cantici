import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import ListaCantici from "./Component/ListaCantici";
import Cantico from "./Component/Cantico";
import Homepage from "./Component/Homepage";
import Audio from "./Component/Audio";
import Raccolta from "./Component/Raccolta";
import CantiRaccolta from "./Component/CantiRaccolta";
import Chiesapalermo from "./Component/Chiesapalermo";
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
          <Route path="/raccolta" element={<Raccolta />} />
          <Route path="/raccolta/:id" element={<CantiRaccolta />} />
          <Route path="/raccoltapalermo" element={<Chiesapalermo />} />
          <Route path="/raccoltapalermo/:id" element={<CantiRaccolta />} />
          <Route path="/audio" element={<Audio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
