import { Link } from "react-router-dom";


function Home() {
  return(
    <div className="App">
    <header className="App-header">
      <img src={'https://s.cornershopapp.com/product-images/2224795.jpg?versionId=IE3p1GE4c7d8.Aeu1Xhg7hfZyeJLEVQZ'} className="App-logo" alt="logo" />
     <div className="nutriharmony">
     <p className="nutri">
        Nutri
      </p>
      <p className="harmony">
        Harmony
      </p>
     </div>

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
    </header>
  </div>
  )
 
}
export default Home;

