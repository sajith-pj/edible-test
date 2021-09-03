import React, { useState ,useEffect } from "react";
import FoodCard from "../FoodCard";
import DatePickers from "../DatePicker/";
import "./FoodList.css";
import yellowline from "../../images/yellow-line.svg";
import verified from "../../images/verified.svg";
import foodData from "../../data";
import Calendar from '../CalendarComponent/CalendarComponent'


const Index = () => {
    const[ foodDetails ] = useState( foodData )
  const [data, setData] = useState(foodData);
  const [ calendar , setCalendar ] = useState( false )
  const [ selectedDates , setSelectedDates ] = useState([])
 

  return (
    <div className="container mx-auto food-list ">
      <div className="flex flex-col justify-center items-center my-20">
        <h3 className="text-5xl"> Choose Your Dishes</h3>
        <img src={yellowline} alt="" className="my-5" />
        <p className="text-gray-500 text-2xl">
          As per your recomented calorie, choose your dishes from below
        </p>
      </div>
      <div className=" w-full flex justify-end items-center">
        <button className=" default-menu flex justify-center items-center rounded-xl">
          <img src={verified} alt="" className="pr-3" />
          <span className=" font-semibold "> Choose Default Menu </span>
        </button>
      </div>
      <div className=" w-full flex justify-around items-center">
        <DatePickers setCalendar={setCalendar} selectedDates={selectedDates} setSelectedDates={setSelectedDates}   />
        {data.map((item, index) => (
          <FoodCard item={item} indexValue={index} />
        ))}
      </div>
      <div className=" w-full flex justify-center items-center  my-14">
        <button
         className="proceedd-btn"
         >
             Proceed 
         </button>
      </div>

            {
                calendar ? <Calendar setCalendar={setCalendar} /> : null
            }
    </div>
  );
};

export default Index;
