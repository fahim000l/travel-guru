import { createBrowserRouter } from "react-router-dom";
import BookingInfo from "../components/BookingInfo/BookingInfo";
import Home from "../components/Home/Home";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import AuthLayout from "../LayOut/AuthLayout";
import Main from "../LayOut/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://easy-travel-server.vercel.app/places'),
            },
            {
                path: '/bookinginfo/:id',
                element: <PrivateRoute><BookingInfo></BookingInfo></PrivateRoute>,
                loader: ({ params }) => fetch(`https://easy-travel-server.vercel.app/places/${params.id}`)
            }
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/auth/signup',
                element: <SignUp></SignUp>,
            }
        ],
    }
])