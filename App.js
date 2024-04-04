import './App.css';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
}
   from 'react-router-dom';
//Pages imports
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import NotFound from './Pages/NotFound';

// layouts
import RootLayout from './Layouts/RootLayout';
import HelpLayout from './Layouts/Help';
import Faq from './Pages/Faq';
import Contact from './Pages/Contact';



const router = createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
    
      <Route path="Login" element={<Login/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      
      <Route path="Help" element={<HelpLayout/>}>
       
         <Route path="Faq" element={<Faq/>} /> 
          <Route path="contact"  element={<Contact/>}/> 
      </Route>
      
      <Route path='*' element ={<NotFound />}/>
  
    </Route>
    
  )
)
function App() {
  return (
    
    <RouterProvider router={router}/>
  );
}

export default App;
