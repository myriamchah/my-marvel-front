import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBackward,
  faForward,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header/Header";
import Characters from "./pages/Characters";
import CharactersComics from "./pages/CharactersComics";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";

library.add(faHeart, faMagnifyingGlass, faForward, faBackward);

function App() {
  const [favs, setFavs] = useState([]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters {...{ setFavs, favs }} />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:charId" element={<CharactersComics />} />
          <Route path="/favorites" element={<Favorites {...{ favs }} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
