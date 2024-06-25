import React from 'react';
import Charcter from '../pages/Charcter';
import Charcters from '../pages/Charcters';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Charcters />,
        },
        {
            path: "/:id",
            element: <Charcter />,
          },
      ]);
  return (  <RouterProvider router={router} />
  )
}
