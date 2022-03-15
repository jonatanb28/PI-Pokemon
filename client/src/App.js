import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import NotFoundPage from './Components/NotFound/NotFoundPage';
import Home from './Components/Home/Home.jsx';
import Details from './Components/Details/Details.jsx';
import CreatePokemon from './Components/CreatePokemon/CreatePokemon.jsx'




function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Home' element={<NotFoundPage/>}></Route>
        <Route exact path='/CreatePokemon' element={<CreatePokemon/>}/>
        <Route exact path='/Home/:id' element={<Details/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
