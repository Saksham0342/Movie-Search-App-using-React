import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { MovieProvider } from "./contexts/MovieContext";
import { Navbar } from "./components/Navbar";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/:id" element={<MovieDetails/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
