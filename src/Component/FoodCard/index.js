import React, { useRef, useState } from "react";

import "./FoodCard.css";
const Index = ({ item , indexValue}) => {
    const slider  = useRef([])
     slider.current  = []
  const [foodDetails, setFoodDetails] = useState(item.details);
  const [index , setIndex ] = useState(0)
  const [ dataSelector , setDataSelector ] =  useState( index )
  


  const  handleIndex = ( value )=>{
            if( value < foodDetails.length ){
                setDataSelector( value  ) 
                if(  value == 0 ){
                 slider.current[0].style.transform = ` translateX( ${0}px)`

                }
                if( value == 1 ){
                  slider.current[0].style.transform = ` translateX( ${70}px)`
               
                }
            }
  }
  

 
    const addToRefs = ( el )=>{
        if( el && !slider.current.includes(el)){
            slider.current.push(el)
        }
    }


  return (
      <div>
<div className="w-full flex justify-center items-center mx-2">
        <p className="text-gray-500 font-semibold"> {item.type} </p>
      </div>
    <div className=" food-card relative overflow-hidden ">
      
      <div className=" w-full h-full overflow-hidden ">
        <img src={foodDetails[index].image} className=" w-full h-full object-cover " alt="" />
        <div className="options-slider absolute ">
          <div className="overflow-hidden w-full h-full flex justify-center items-center">
            <button
              className="option-btn flex justify-center items-center focus:text-black text-white font-semibold"
              type="button"
               onClick = {
                ()=> handleIndex(0)
               }
            >
              {" "}
              A{" "}
            </button>
            <button
              className="option-btn ml-4 flex justify-center items-center focus:text-black text-white  font-semibold "
              type="button"
              onClick = {
                ()=> handleIndex(1)
              }
            >
              {" "}
              B{" "}
            </button>
            <span className="slider" ref={addToRefs}></span>
          </div>
        </div>
        
      </div>
    
    </div>
    <div className="w-full flex justify-center items-center mx-4">
        <p className="text-gray-500 font-semibold"> {foodDetails[dataSelector].name} </p>
      </div>

      
   
    </div>
  );
};

export default Index;
