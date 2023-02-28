
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Nav from "./Nav"

const Landing = () => {

    return (
      <div>
        <div className="w-full bg-luna sm:bg-contain bg-center ">
          <Nav />
        
        <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );

}
export default Landing