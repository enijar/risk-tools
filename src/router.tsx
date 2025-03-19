import React from "react";
import { createHashRouter, Outlet } from "react-router-dom";
import ErrorPage from "~/components/error/error";
import Loading from "~/components/loading/loading";

export const router = createHashRouter([
  {
    element: <Outlet />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        id: "home",
        path: "/",
        Component: React.lazy(() => import("~/pages/home/home")),
        async loader() {
          const res = await fetch("maps.json");
          return await res.json();
        },
      },
    ],
  },
]);

export default router;
