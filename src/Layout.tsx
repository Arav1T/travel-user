
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

export default function() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
          <Outlet/>
          </main>
          <Footer />
          <Toaster position="top-center" />
        </div>
    
    </>
  )
}
