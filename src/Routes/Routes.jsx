import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";

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
    ],
  },
]);
