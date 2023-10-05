import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";

const Layout = () => {
    return (
        <div>
            <Login></Login>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;