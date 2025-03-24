import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Registration from "../pages/registration/Registration";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import JobDetails from "../pages/jobdetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import Application from "../pages/applicationPage/Application";
import MyApplication from "../pages/myApplication/MyApplication";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import AddJobs from "../pages/addJobs/AddJobs";
import ViewApplication from "../pages/viewApplication/ViewApplication";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/registration",
                element: <Registration />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)
            },
            {
                path: "/job-apply/:id",
                element: <Application />
            },
            {
                path: "/myApplications",
                element: <PrivateRoute><MyApplication /></PrivateRoute>
            },
            {
                path: "/myPostedJobs",
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: "/addJobs",
                element: <PrivateRoute><AddJobs /></PrivateRoute>
            },
            {
                path: "/viewApplications/:job_id",
                element: <PrivateRoute><ViewApplication /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
            }
        ]
    }
])

export default router