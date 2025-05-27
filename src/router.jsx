import { createBrowserRouter } from "react-router"
import Layout from "./Layout"
import Home from "./pages/home";
import List from "./pages/List";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Notfound from "./pages/Notfound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "list",
                element: <List/>
            },
            {
                path: "list/:id",
                element: <Detail/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "*",
                element: <Notfound/>
            }
        ]
    }
]);

export default router