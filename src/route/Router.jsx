import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Registration from "../pages/registration/Registration";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import JobDetails from "../pages/jobdetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import Application from "../pages/applicationPage/Application";
import MyApplication from "../pages/myApplication/MyApplication";

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
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoute><JobDetails/></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/job/${params.id}`)
            },
            {
                path: "/job-apply/:id",
                element: <Application/>
            },
            {
                path: "/myApplications",
                element: <MyApplication/>
            }
        ]
    }
])

export default router