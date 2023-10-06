import React from 'react'
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import Home from './Home'
import About from './About'


    export default function Myroute(){
        return(
            <BrowserRouter>
            <Routes>
            <Route path ='/' element ={<Home/>}/>
            <Route path ='/About' element ={<About/>}/>
            </Routes>

            </BrowserRouter>
            
        );
           

    }
     
