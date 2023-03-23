import React from "react"
import "./styles.css"
import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="navbar">
            <div>
                <Link className="logo" to="/">
                    <h3>My Blog</h3>
                </Link>
            </div>
            <div>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/post">Sobre</Link>
                <Link className="nav-link" to="/contact">Contato</Link>
                <button className="nav-button">Login</button>
            </div>
        </nav>
    )
}