import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Users from "./views/Users";
import UserForm from "./views/UserForm";
import BuatJanji from "./views/User/BuatJanji.jsx";
import Jadwal from "./views/User/Jadwal.jsx";
import Edukasi from "./views/User/Edukasi.jsx";
import Kontak from "./views/User/Kontak.jsx";
import HomeUser from "./views/User/Homepage/HomeUser.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeUser />
    },
    {
        path: "/buat-janji",
        element: <BuatJanji />
    },
    {
        path: "/jadwal",
        element: <Jadwal />
    },
    {
        path: "/edukasi",
        element: <Edukasi />
    },
    {
        path: "/kontak",
        element: <Kontak />
    },
    {
        path: "/admin/section",
        element: <DefaultLayout />,
        children: [
            {
                path: "/admin/section/",
                element: <Navigate to="/dashboard" />,
            },
            {
                path: "/admin/section/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/admin/section/users",
                element: <Users />,
            },
            {
                path: "/admin/section/users/new",
                element: <UserForm key="userCreate" />,
            },
            {
                path: "/admin/section/users/:id",
                element: <UserForm key="userUpdate" />,
            },
        ],
    },
    {
        path: "/guest",
        element: <GuestLayout />,
        children: [
            {
                path: "/guest/login",
                element: <Login />,
            },
            {
                path: "/guest/signup",
                element: <Signup />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
