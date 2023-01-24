import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import About from "../pages/about/About";
import { createBrowserRouter } from "react-router-dom";
import Error404 from "../pages/error/Error404";
import Layout from "../components/layout/Layout";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/logement/:logementID",
    element: (
      <Layout>
        <Details />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <Error404 />
      </Layout>
    ),
  },
]);

export default AppRouter;
