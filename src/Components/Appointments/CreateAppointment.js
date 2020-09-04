import React, { Component, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function CreateAppointment(){
        const[selectedDate,setSelectedDate] = useState(null)
        return (
            <div>
                Hi I'm create component
                <DatePicker minDate = {new Date()} selected={selectedDate} onChange={date => setSelectedDate(date)} /> 
            </div>
        )
}
export default CreateAppointment