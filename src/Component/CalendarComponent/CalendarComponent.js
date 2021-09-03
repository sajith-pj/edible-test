import React from 'react'
import { Calendar } from "react-multi-date-picker";


const CalendarComponent = ( {setCalendar} ) => {
    return (

        <div className="  h-screen  absolute top-0 flex justify-center items-center left-0 overflow-hidden" style={{ width:"100%",background:" rgba(0,0,0,0.3)" ,zIndex:1000}}>
            <div className="bg-white p-3 rounded-2xl">
                <div className="w-full flex justify-end">
                    <button type="button"
                    onClick={ ()=> setCalendar( false )}
                    > 
                    <i class="fas fa-times"></i>
                    </button>
                </div>
            <Calendar />
            </div>
        </div>
    )
}

export default CalendarComponent
