import ReactDOM from "react-dom/client";
import "./index.css";
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Page from "./components/Page";
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/page",
        element: <Page />,
      },
      // {
      //   path: '/contact',
      //   element: <Contact />,
      // },
      // {
      //   path: '/portfolio',
      //   element: <Portfolio />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
