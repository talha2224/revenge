
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import LoaderGif from './assets/loader.gif';
import Home from './pages/Home';
import Details from './pages/Details';


function SuspenseWithDelay({ children, fallback, delay = 0, minDisplayTime = 2000 }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), minDisplayTime);
    return () => clearTimeout(timer);
  }, [minDisplayTime]);

  return isLoading ? (
    <div className="flex justify-center items-center w-screen h-screen">
      <img src={LoaderGif} alt="Loading..." className="h-[6rem]" />
    </div>
  ) : (
    <Suspense fallback={fallback}>{children}</Suspense>
  );
}

function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <SuspenseWithDelay fallback={<div className="flex justify-center items-center w-screen h-screen"><img src={LoaderGif} alt="HopOn Dashboard- Loader" className="h-[6rem]" /></div>} minDisplayTime={2000}>

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />


          </Routes>
        </SuspenseWithDelay>
      </BrowserRouter>
    </>
  );
}

export default App;
