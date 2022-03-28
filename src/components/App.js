import Home from "./Home";
import Web from "./Web";
import App3dar from "./Apprdar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web" element={<Web />} />
          <Route path="/app3dar" element={<App3dar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
