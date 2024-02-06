import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Secret from "../pages/Shared/Secret";
import PrivateRoute from "./private/PrivateRoute";
import DashBoard from "../Layouts/DashBoard";
import Cart from "../pages/cart/Cart";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <div className="text-5xl font-bold flex justify-center mt-72">Error</div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu/>
      },
      {
        path: 'order/:category',
        element: <Order/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path : 'signup',
        element: <SignUp/>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret/></PrivateRoute>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashBoard/></PrivateRoute>,
    children: [
      {
        path: 'cart',
        element: <Cart/>
      }
    ]
  }
]);
