import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Registration from "../pages/registration/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children: [
            {
                path: "/registration",
                element: <Registration/>
            }
        ]
    }
])

export default router