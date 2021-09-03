import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import FoodList from '../Component/FoodList'
import Form from '../Component/Form'
import Footer from '../Component/Footer'
const Home = () => {
    return (
       < div className="bg-white">
           <Navbar/>
           <FoodList/>
           <Form/>
           <Footer/>
       </div>
    )
}

export default Home
