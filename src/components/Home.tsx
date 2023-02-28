import React from 'react'
import Presentation from "./Presentation"
import Shop from "./Shop"
import Software from "./Software"
import Videos from "./Videos"
import GridServiciosPrincipales from "./GridServiciosPrincipales";

const Home = () => {
  return (
    <div>
       <Presentation />
            <GridServiciosPrincipales />
            <Shop />
            <Software />
            <Videos />
            
        
    </div>
  )
}

export default Home