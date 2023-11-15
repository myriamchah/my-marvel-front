import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";

library.add(faHeart);

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/favorites" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
