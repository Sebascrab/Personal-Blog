import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Register from './pages/Register';
import Login from './pages/Login';
import Write from './pages/Write';
import Single from './pages/Single';
import Home from './pages/Home';
import User from './pages/User';
import Edit from './pages/Edit';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";


const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet  />
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />,
    children: [
      {
        path: "/", 
        element: <Home/>
      }, 
      {
        path: "/post/:id", 
        element: <Single />
      }, 
      {
        path: "/write", 
        element: <Write />
      },
      {
        path: "/user",
        element: <User />
      }, 
      {
        path: "/edit",
        element: <Edit />
      }
    ]
  },
  {
    path: "/register", 
    element: <Register/>,
  },
  {
    path: "/login", 
    element: <Login/>
  },
  
]);


function App() {
  return (
    <div className="app">
      
      <div className="container">
        
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}



export default App;
