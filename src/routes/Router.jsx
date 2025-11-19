import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Home/Coverage/Coverage";
import AboutUs from "../pages/Aboutus/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/login/Login";
import Register from "../pages/Auth/register/Register";
import ForgetPassword from "../pages/Auth/ForgetPassword/ForgetPassword";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../pages/sendParcel/SendParcel";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "forget-password",
        Component: ForgetPassword,
      },
    ],
  },
]);

export default router;
