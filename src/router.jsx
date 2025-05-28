import { createBrowserRouter } from "react-router"
import Layout from "./Layout"
import Home from "./pages/home";
import List from "./pages/List";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Notfound from "./pages/Notfound";
import { getUser, getUsers } from "./utilities/typicode";
import Loading from "./components/Loading";
import { ErrorBoundary } from "./components/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        hydrateFallbackElement: <Loading/>,
        errorElement: <ErrorBoundary/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "list",
                element: <List/>,
                loader: getUsers,
            },
            {
                path: "list/:id",
                element: <Detail/>,
                loader: getUser,
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