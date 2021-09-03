import React from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import Navbar from '../Component/Navbar/Navbar'
import Home from '../pages/Home'
const Routes = () => {
    return (
        <>
        <Router>
      
            <Route path="/" component={Home} />
        </Router>
        </>
    )
}

export default Routes
