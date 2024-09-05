import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import Navbar from './components/Navbar/Navbar'
import React from 'react'
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/store' element={<Store />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

