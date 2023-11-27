import './App.css';
import Header from "./componentes/Header";
import Nav from "./componentes/Navigation";
import Footer from "./componentes/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./paginas/Home";
import Contacto from "./paginas/Contacto";
import Posts from "./paginas/Posts";
import Productos from "./paginas/Productos";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/Posts' element={<Posts/>}></Route>
          <Route path='/Productos' element={<Productos/>}></Route>
          <Route path='/Contacto' element={<Contacto/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
