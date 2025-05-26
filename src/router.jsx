import { createBrowserRouter, Navigate } from "react-router-dom";
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
    element: <HomeUser />,
  },
  {
    path: "/buat-janji",
    element: <BuatJanji />,
  },
  {
    path: "/jadwal",
    element: <Jadwal />,
  },
  {
    path: "/edukasi",
    element: <Edukasi />,
  },
  {
    path: "/kontak",
    element: <Kontak />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
