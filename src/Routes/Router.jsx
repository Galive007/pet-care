import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Profile from "../Pages/Profile";
import Loading from "../Component/Loading";
import ServiceDetails from "../Pages/ServiceDetails";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import ErrorPage from "../Component/ErrorPage";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                Component: Home,
                loader: async () => {
                    const [servicesRes, tipsRes, vetsRes, happyCustomerRes] = await Promise.all([
                        fetch('/petCareServices.json'),
                        fetch('/winterTips.json'),
                        fetch('/vets.json'),
                        fetch('/HappyCustomer.json')
                    ]);

                    const [services, tips, vets, happyCustomer] = await Promise.all([
                        servicesRes.json(),
                        tipsRes.json(),
                        vetsRes.json(),
                        happyCustomerRes.json()
                    ]);

                    return { services, tips, vets, happyCustomer };
                },
                hydrateFallbackElement: <Loading></Loading>,

            },
            {
                path: '/service',
                Component: Services,
                loader: () => fetch('/petCareServices.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: '/service-details/:id',
        element: <PrivateRoute>
            <ServiceDetails></ServiceDetails>
        </PrivateRoute>,
        loader: () => fetch('/petCareServices.json'),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])