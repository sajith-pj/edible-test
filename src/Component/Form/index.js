import React from 'react'
import './Form.css'
const Index = () => {
    return (
        <div className=" form-background mt-24">
            <div className=" form-overlay w-full h-full flex justify-center items-center flex-col">
            <h1 className=" text-white text-4xl font-bold "> Feel Free to contact us for your customized meal  </h1>  
            <form className="form bg-white w-3/4 flex mt-4 ">
                <div className="p-5 w-full  grid grid-cols-2  flex justify-center items-center">
                <div className="flex flex-col px-4 py-2">
                    <label>
                        Your Name*
                    </label>
                    <input type="text" className="bg-gray-100 outline-none form-input p-4 w-full " name="name" />
                </div>
                <div className="flex flex-col px-4 py-2" >
                    <label>
                        Your Email*
                    </label>
                    <input type="email" className="bg-gray-100 outline-none form-input p-4 w-full " name="phone" />
                </div>
                <div className="flex flex-col px-4 py-2">
                    <label>
                        Your Phone*
                    </label>
                    <input type="text" className="bg-gray-100 outline-none form-input p-4 w-full " name="phone" />
                </div>
                <div className="flex flex-col px-4 py-2">
                    <label>
                        Your Message*
                    </label>
                    <input type="text" className="bg-gray-100 outline-none form-input p-4 w-full " name="message" />
                </div>
                </div>
                <button type="submit" className="send-now-btn text-2xl font-bold"> Send Now </button>
            </form>
            
        </div>
        </div>
    )
}

export default Index
