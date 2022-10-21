import { Link } from "react-router-dom";
import React from 'react'

function Header() {
    return(
        <div className="links">
        <Link
          to="/"
          className="App-link "
          >
            Home
        </Link>
        <Link
          to="/consultorias"
          className="App-link "
          >
            Consultorias
        </Link>
        <Link
          to="/programas"
          className="App-link "
          >
            Programas
        </Link>
        <Link
          to="/blog"
          className="App-link "
          >
            Blog
        </Link>
        <Link
          to="/galeria"
          className="App-link "
          >
            Galeria
        </Link>
        <Link
          to="/agendamento"
          className="App-link "
          >
            Marcar Consulta
        </Link>
       </div>
    )
}

export default Header;