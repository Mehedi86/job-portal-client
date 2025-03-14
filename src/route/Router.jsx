import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Registration from "../pages/registration/Registration";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/registration",
                element: <Registration/>
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    }
])

export default router