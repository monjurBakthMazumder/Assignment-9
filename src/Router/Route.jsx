import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPages/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details/></PrivateRoute>
            },
            {
                path: '/contact',
                element: <PrivateRoute><Contact/></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default Route;