import './App.css'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { useDirection } from './hooks/useDirection'
import Layout from './components/Layout/Layout';
import Home from './components/Home/home';
import '@fontsource/roboto';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/400.css';
import '@fontsource/tajawal';
import '@fontsource/tajawal/700.css';
import '@fontsource/tajawal/500.css';
import '@fontsource/tajawal/400.css';
function App() {

  useDirection();

  const routes = createHashRouter([
    {
      path:"",
      element: <Layout/> ,
      children:[
        {index:true, element: <Home/> },
        {path:"home", element:<Home/>},
        // {path:"schools", element:<Schools/>},
        // {path:"business", element:<Business/>},
       
      ],
    },
  
  ])
  return (
    <>
    <div className=" ">
       <RouterProvider  router={routes}></RouterProvider>

    </div>

    </>
  )
}

export default App
