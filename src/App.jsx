import {createBrowserRouter,Route ,createRoutesFromElements, RouterProvider} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import NotFound from './pages/NotFound';
import Careers, { careersLoader } from './pages/careers/Careers';
import Career, { CareerDetails } from './pages/careers/Career';
import CareersError from './pages/careers/CareersError';
//layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareerLayout from './layouts/CareerLayout';



const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>

      <Route path='help' element={<HelpLayout/>}>
        <Route path='faq' element={<Faq/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Route>
    <Route path='careers' element={<CareerLayout/>} errorElement={<CareersError/>}>
      <Route 
      index 
      element={<Careers/>}
      loader={careersLoader}
      ></Route>
      <Route path=':id' element={<Career/>} loader={CareerDetails}></Route>
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
