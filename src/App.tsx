// import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import ListingDetails from './pages/ListingDetails';
// import Bookings from './pages/Bookings';
// import Login from './pages/Login';
// import { Toaster } from 'react-hot-toast';
// import Categories from './pages/Categories';
// import React from 'react';
// import Layout from './Layout';
// import Forgot from './pages/Forgot';
// import AllPro from './pages/AllPro';


// function App() {
//   const router=createBrowserRouter(createRoutesFromElements(<>
//   <Route path="/login" element={<Login />} >
//   </Route>
//   <Route path="/forgot"  element={<Forgot/>}/>
//   <Route path="/" element={<Layout />} >
//   <Route path="" element={<Home />} />
//               <Route path="listings/:id" element={<ListingDetails />} />
//               <Route path="bookings" element={<Bookings />} />
//               <Route path="category/:name" element={<Categories />} />
//               <Route path="allStays" element={<AllPro />} />
  
//   </Route>
//   </>))
//   return (
 
//       <AuthProvider>
        
//             <RouterProvider router={router} />
           
//       </AuthProvider>
//   );
// }

// export default App;

import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './Layout';
import Home from './pages/Home';
import ListingDetails from './pages/ListingDetails';
import Bookings from './pages/Bookings';
import Login from './pages/Login';
import Forgot from './pages/Forgot';
import Categories from './pages/Categories';
import AllPro from './pages/AllPro';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="listings/:id" element={<ListingDetails />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="category/:name" element={<Categories />} />
        <Route path="allStays" element={<AllPro />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot" element={<Forgot />} />
    </>
  )
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      {/* Add the Toaster here so it's globally available */}
      <Toaster />
      {/* Provide the RouterProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
