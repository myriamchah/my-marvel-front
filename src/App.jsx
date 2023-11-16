import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
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
  let cookies = Cookies.get("favs");
  const [favs, setFavs] = useState(
    (cookies && JSON.parse(cookies)) || [[], []]
  );

  const toggleFav = (item, type) => {
    let newFavs = [...favs];
    if (type === "char") {
      if (!newFavs[0].includes(item)) {
        newFavs[0].push(item);
      } else {
        newFavs[0].splice(newFavs[0].indexOf(item), 1);
      }
    } else if (type === "comic") {
      if (!newFavs[1].includes(item)) {
        newFavs[1].push(item);
      } else {
        newFavs[1].splice(newFavs[1].indexOf(item), 1);
      }
    }
    setFavs(newFavs);
    Cookies.set("favs", JSON.stringify(newFavs));
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters {...{ toggleFav, favs }} />} />
          <Route path="/comics" element={<Comics {...{ toggleFav, favs }} />} />
          <Route
            path="/comics/:charId"
            element={<CharactersComics {...{ toggleFav, favs }} />}
          />
          <Route
            path="/favorites"
            element={<Favorites {...{ toggleFav, favs }} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
