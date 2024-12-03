import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";


const Homelayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Homelayout;