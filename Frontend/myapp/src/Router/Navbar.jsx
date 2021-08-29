import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import login from './../Compoents/Login';
import Home from './../Landingpage/Home';

const Navbar = () => {
    return (
        <div>
          <NavLink to="/"></NavLink>
          <NavLink to="/login"></NavLink>
          <NavLink to="/register"></NavLink>
        </div>
    )
}

export default Navbar
