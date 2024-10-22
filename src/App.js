
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Componant/Layout/Layout';
import Home from "./Componant/Home/Home"
import Notfound from "./Componant/Notfound/Notfound"




function App() {

  
let routers = createBrowserRouter([
  {path : "" , element : <Layout/> , children : [
    {path : "/Gallary-Image" , element : <Home/>},
    {path : "*" , element : <Notfound/>}
  ]}
])

  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}

export default App;
