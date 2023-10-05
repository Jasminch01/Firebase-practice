import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import PrivetRoute from "../Components/PrivetRoute/PrivetRoute";

const Router = createBrowserRouter([
    {
        path : '/login',
        element : <Login></Login>
    },
    {
        path : '/registration',
        element : <Registration></Registration>
    },
    {
        path : '/',
        element : <PrivetRoute><Layout></Layout></PrivetRoute>,
        children : [
            {
                path : '/',
                element : <div>Home</div>
            },
            {
                path : '/products',
                element : <div>products</div>
            },
            {
                path : '/about',
                element : <div>About</div>
            }
        ]
    }

])

export default Router;