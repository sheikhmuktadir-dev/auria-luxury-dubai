import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// css
import "./Style/index.css";
import "./Style/root.css";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// context
import FetchContextProvider from "./Context/FetchContextProvider.jsx";

// pages
import Layout from "./Layout.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import DetailsPage from "./Pages/DetailsPage/DetailsPage.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Properties from "./Pages/Properties/Properties.jsx";
import About from "./Pages/About/About.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "properties",
        element: <Properties />,
      },
      {
        path: "details/:id",
        element: <DetailsPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FetchContextProvider>
      <RouterProvider router={routes} />
    </FetchContextProvider>
  </StrictMode>
);
