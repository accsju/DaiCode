import Home from './Page/Home/Home'
import About from './Page/About/About'
import NotFound from './Page/NotFound/NotFound'

import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {path: '/KaiCode/', element: <Home />},
  {path: '/KaiCode/about', element: <About />},
  
  {path: '*', element: <NotFound />},
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
};

export default App;
