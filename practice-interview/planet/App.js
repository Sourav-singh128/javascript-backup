import "./App.css";
import Login from "./pages/login";
import Planet from "./pages/planet";
import { Route, Routes } from "react-router-dom";
import Multiselect from "./multiselectByMe/Multiselect";
function App() {
  return (
    <div className="container">
      {/* <h1>Star Wars</h1> */}
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/planets" element={<Planet />} />
      </Routes> */}
      <Multiselect />
    </div>
  );
}

export default App;
