import React from "react";
import { Link } from 'react-router-dom';
import RoutesPage from '../../RoutesPages';
import Home from '../../pages/home';
import './Nabvar.css';

const Navbar = () => {

    return(
        <>
        <nav>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Cadastrar</Link>
            <Link to='/' element={<Home />}>Home</Link>
        </nav>
        <RoutesPage />
        </>
    )
}

export default Navbar;