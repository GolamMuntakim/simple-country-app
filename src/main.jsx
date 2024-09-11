import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Error from './Error.jsx';
import CountryDetails from './CountryDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:    <App />,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/countrydetail",
        element: <CountryDetails></CountryDetails>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
