import { Component } from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Cine from "./Cine";
import Musica from "./Musica";
import Home from "./Home";
import Collatz from "./Collatz";
import TablaMultiplicar from "./TablaMultiplicar";

export default class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cine" element={<Cine/>}/>
                    <Route path="/musica" element={<Musica/>}/>
                    <Route path="/juego" element={<Collatz/>}/>
                    <Route path="/tabla" element={<TablaMultiplicar/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}