import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
//import Header from './component/page/Header';
import FormCadUsers from "./component/page/FormCadUsers";
import ListUsers from './component/page/ListUsers';
import LoginForm from './component/page/LoginForm.jsx';
import ListProduct from './component/page/ListProduct.jsx';
import AppHeader from './component/organism/AppHeader.jsx';

//import {db} from './firebase';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/listUsers' element ={<ListUsers/>}/>     
        <Route path='/listProduct' element ={<ListProduct/>}/>     
        <Route path='/listUsers/:userId' element ={<ListUsers/>}/>     
        <Route path='/cadUsers' element ={<FormCadUsers/>}/>     
        <Route path='/loginForm' element ={<LoginForm/>}/>     
        <Route path='/appHeader' element ={<AppHeader/>}/>     
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
