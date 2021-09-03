import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import facebook from '../../images/facebook.svg'
import youtube from '../../images/youtube.svg'
import twitter from '../../images/twitter.svg'
import whatsapp from '../../images/whatsapp.svg'
import instagram from '../../images/instagram.svg'
import './Footer.css'
const Index = () => {
    return (
        <div class="bg-white  h-80 flex justify-center items-center">
            <div className="max-w-screen-lg  mx-auto my-auto grid grid-cols-5">
                <div className="w-full flex justify-center items-center ">
                    <Link>
                    <img src={logo} alt=" logo"  className="logo" />
                    </Link>
                </div>
                <div className="w-full  flex  flex-col">
                    <h2 className="footer-heading">Address</h2>
                    <p>
                    Edible Kitchen Services JN Stadium, Kaloor Kochi - 6806644
                    </p>
                </div>
                <div className="w-full flex   flex-col">
                    <h2 className="footer-heading">Phone</h2>
                    <p>0124 398 6371</p>
                </div>
                <div className="w-full flex  flex-col">
                    <h2 className="footer-heading">Quick Link</h2>
                    <ul>
                        <li>
                            <Link> 
                            My Account
                            </Link>
                        </li>
                        <li>
                            <Link> 
                           About US
                            </Link>
                        </li>
                        <li>
                            <Link> 
                            Keto Plans
                            </Link>
                        </li>
                        <li>
                            <Link> 
                           Our Dishes
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full flex  flex-col">
                    <h2 className="footer-heading">Quick Link</h2>
                    <ul className=" w-full flex justify-between items-center  mt-4">
                        <li>
                            <Link>
                            <img src={facebook} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                            <img src={youtube} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                            <img src={twitter} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                            <img src={whatsapp} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                            <img src={instagram} alt="" />
                            </Link>
                        </li>
                    </ul>
                    </div>
            </div>
            
        </div>
    )
}

export default Index
