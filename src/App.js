import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Favourites from './components/Favourites';
function App() {
  return (
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/fav" element={<><Favourites/></>}></Route>
            <Route path="/"element={<><Banner /><Movies /><Pagination /></>} />
        </Routes>
        
      </BrowserRouter>
  
  );
}

export default App;
