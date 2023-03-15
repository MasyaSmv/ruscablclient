import React from 'react'
import {Route, Routes,} from 'react-router-dom'
import {ProductPage} from "../../pages/MainPage/ProductPage";
import {AboutPage} from "../../pages/AboutPage";
import {NoMatch} from "../../pages/NoMatch";
import {Navigation} from "../../components/Navigation";

export function Routs() {
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path="/" element={<ProductPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route element={<NoMatch/>}/>
            </Routes>
        </div>
    )
}
