import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Explore from "./pages/Explore/Explore";
import './App.css';


const Layout = () => {
  return(
    <div>
      <h1>Navbar</h1>
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      
    ]
  },

]);

function App() {
  return (
    <div>
     <RouterProvider router ={router}></RouterProvider>
      </div>
  );
}

export default App;
