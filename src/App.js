import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MyContext from "./context";

import "./App.css";

import Header from "./components/Header/Header";
import MovieCards from "./components/MovieCards/MovieCards";
import NavBar from "./components/NavBar/NavBar";
import NewMovies from "./components/NewMovies/NewMovies";
import Login from "./components/Login/Login";
import Favourite from "./components/Favourite/Favourite";
import SendMessages from "./components/whtasapp";
import PostComment from "./BestMovies/BestMovies";

function App(props) {

  const [filterMovies, setFilterMovies] = useState("");

  const [watchList, setWatchList] = useState([]);

  const [search, setSearch] = useState("");

  const onSearch = (searchText) => {
    setSearch(searchText);
  };

  useEffect(() => {
    console.log("movies", watchList);
  }, [watchList]);

  return (
    <div className="App">
      <MyContext.Provider
        value={{ watchList, setWatchList, filterMovies, setFilterMovies }}
      >
        <BrowserRouter>
          <Header />
          <NavBar onSearch={onSearch} />
          <FloatingWhatsApp
            phoneNumber="8137839779"
            accountName="Reeels"
            allowEsc
            allowClickAway
            notification
            notificationSound
            placeholder="How can we help you"
            messageDelay={2}
            chatMessage="Hello "
          />

          {/* <Banner/> */}
          <Routes>
            {/* <Route element={ <NavBar onSearch={onSearch} />}/> */}
            <Route path="/message" element={<SendMessages />} />
            <Route path="/" element={<MovieCards searchText={search} />} />
            <Route path="/new-movies" element={<NewMovies />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post" element={<PostComment />} />
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
