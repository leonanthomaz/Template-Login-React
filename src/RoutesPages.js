import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

const RoutesPage = () => {
    return(
        <>
        <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/login' exact element={<Login />}></Route>
            <Route path='/register' exact element={<Register />}></Route>
        </Routes>
        </>
    )
}

export default RoutesPage;