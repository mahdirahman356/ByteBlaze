import { Outlet} from "react-router-dom";
import Navbar from "../Navebar/Navbar";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <div className="h-16">   
            <Navbar></Navbar>
            </div>
        
           <div>
             <Outlet></Outlet>
             <Footer></Footer>
             </div>
        </div>
    );
};

export default Home;