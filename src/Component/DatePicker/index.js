import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import "./DatePicker.css";

const Index = ( { setCalendar , setSelectedDates ,selectedDates } ) => {
  const [dates, setDates] = useState([]);
 

  useEffect(() => {
    let date = datesArray();
    setDates(date);
  }, []);

  const datesArray = () => {
    var array = [];
    for (var i = 0; i < 29; i++) {
      var newDate = moment().add(i, "days").calendar("DD MM YYYY");
      array.push(newDate);
    }
    return array;
  };

  return (
    <div className=" date-box-container flex items-center  flex-col">
      <div className=" date-list">
        <ul>
          {dates.map((date, index) => (
            <li className="my-2 flex justify-around items-center checkbox  hover:bg-white hover:text-black p-2 rounded-lg ">
             
              <input
                type="checkbox"
                className="date-box cursor-pointer"
                id={"dates" + index}
                value={date}
                onChange={ ( event ) => setSelectedDates( [...selectedDates , event.target.value])}
              />
              <label className="text-sm" htmlFor={"dates" + index}>
                {date}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="  w-full h-full flex justify-around items-center p-5">
        <button 
        className="select-date w-full h-full text-white"
        onClick= { ()=> setCalendar( true )}
        >
          {" "}
          Select Custom Date
        </button>
      </div>
    </div>
  );
};

export default Index;
