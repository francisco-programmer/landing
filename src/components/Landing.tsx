
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Nav from "./Nav"

const Landing = () => {

    return (
      <div>
       
          <Nav />
        
        <Outlet />
        
        <div>
          <Footer />
        </div>
      </div>
    );

}
export default Landing