import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackgroundChanger from "./apps/BackGroundChanger/BackgroundChanger";
import CurrencyCvt from "./apps/currencyCoverter/CurrencyCvt";
import MovieApp from "./apps/Movie Website/MovieApp";
import Home from "./apps/Home";
import ToDoApp from "./apps/Todo/ToDoApp";
import PasswordGenerator from "./apps/passwordGenrator/PasswordGenrator";
import Balancer from "./apps/balancer/Balancer";
import FlagHome from "./apps/flag/FlagHome";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*'>
          <Route path='' element={<Home/>}/>
          <Route path='balancer' element={<Balancer/>}/>
          <Route path='createpassword' element={<PasswordGenerator/>}/>
          <Route path='bgtheme' element={<BackgroundChanger/>}/>
          <Route path='currency' element={<CurrencyCvt/>}/>
          <Route path='movie/*' element={<MovieApp/>}/>
          <Route path='todo/*' element={<ToDoApp/>}/>
          <Route path='flag/' element={<FlagHome/>}/>


        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
