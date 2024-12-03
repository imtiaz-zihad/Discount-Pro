import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../componentes/Homelayout";
import Home from "../componentes/Home";
import Brands from "../componentes/Brands";

import AboutDev from "../componentes/AboutDev";
import AuthLayout from "../componentes/AuthLayout";
import Login from "../componentes/Login";
import Register from "../componentes/Register";
import PrivateRouter from "./PrivateRouter";
import BrandDetails from "../componentes/BrandDetails";
import UserProfile from "../componentes/UserProfile";
import NotFound from "../componentes/NotFound";
import UpdateForm from "../componentes/UpdateForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/brands",
        element: <Brands />,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <UserProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/about",
        element: <AboutDev />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/brands/coupon/:id",
    element: (
      <PrivateRouter>
        <BrandDetails />
      </PrivateRouter>
    ),
    loader: async ({ params }) => {
      const res = await fetch("/brands.json");
      const data = await res.json();

      const singleData = data.find((d) => d._id == params.id);
      return singleData;
    },
  },
  {
    path: "/profile/update",
    element: (
      <PrivateRouter>
        <UpdateForm />
      </PrivateRouter>
    ),
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
