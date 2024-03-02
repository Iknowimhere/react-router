import {createBrowserRouter,Route ,createRoutesFromElements, RouterProvider} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

//layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>

      <Route path='help' element={<HelpLayout/>}>
        <Route path='faq' element={<Faq/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Route>

      <Route path='*' element={<NotFound/>}/>
  </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App