import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <div className="text-5xl font-bold flex justify-center mt-72"></div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu/>
      }
    ],
  },
]);
