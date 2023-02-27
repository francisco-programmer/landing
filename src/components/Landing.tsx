import GridServiciosPrincipales from "./GridServiciosPrincipales"
import Nav from "./Nav"
import Presentation from "./Presentation"
import Shop from "./Shop"
import Software from "./Software"
import Videos from "./Videos"

const Landing = () => {

    return (
        <div>
            <div className="w-full h-[200vh] invert-0 bg-[url('https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=2000')]  bg-cover bg-center ">
            <Nav />
            <Presentation />
            <GridServiciosPrincipales />
            <Shop />
            <Software />
            <Videos />
            
            </div>
        </div>
    )
}
export default Landing