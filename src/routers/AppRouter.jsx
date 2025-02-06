// AppRouter.jsx
import { createBrowserRouter } from "react-router-dom";
import Index from "@/components";
import Country from "@/components/Country";
import About from "@/components/About";
import Contact from "@/components/Contact";
import AppLayout from "@/layout/layout";
import ErrorPage from "@/components/EroorPage";
import CountryDetails from "@/components/CountryDetails";
const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/country/:countryName",
        element: <CountryDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

    ]  },
  
]);

export default router;