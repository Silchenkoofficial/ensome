import { createBrowserRouter } from "react-router-dom";
import { HomePage, SolutionsPage } from "src/Pages";
import App from "src/App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <HomePage />,
      },
      {
        path: "/solutions",
        element: <SolutionsPage />,
      },
    ],
  },
]);

export default router;
