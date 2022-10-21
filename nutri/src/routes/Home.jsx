import React from 'react'
import Header from './components/header';


function Home() {
  return(
    <div className="App">
      <Header />
    <header className="App-header">
      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1t2OsYgOGK3Oop7dP4We9iGudGn4dgrW7HMJkGjvKWzLtOa9eEULZkHDxe-gZhqBk5Ho&usqp=CAU'}
           className="App-logo" 
           alt="logo" />
     <div className="nutriharmony">
     <p className="nutri">
        Nutri
      </p>
      <p className="harmony">
        Harmony
      </p>
     </div>    
    </header>
  </div>
  )
 
}
export default Home;

