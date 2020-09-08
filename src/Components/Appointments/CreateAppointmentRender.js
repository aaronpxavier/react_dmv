import React, {useState} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as appointmentActions from "../../Redux/Actions/appointmentActions";


function CreateAppointmentRender(props) {
    console.log("Create appnt props >>>>>>>>>",props.actions)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function onSubmit(){
      alert("Hi")
    }
  return (

    <div>
    <form onSubmit = {onSubmit}>
    <input type="text" placeholder="Appointment Description"></input>   
    <label for="cars">Choose a car:</label>

<select name="contacts" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> 
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
    <button>Create Appointment</button>

                    </form>
    </div>
  );
  }

 // export default CreateAppointment;

// export default class CreateAppointment extends React.Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             description: props.expense ? props.expense.description : "",
//             startDate : null,
//             endDate : null,
//             amount: props.expense ? props.expense.amount : "",
//             note: props.expense ? props.expense.note : "",
//             createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
//             focused: false
//         }
//     }

//     onDescriptionChange = (e) => {
//         const description = e.target.value
//         this.setState(() => ({description}))
//     }

//     onAmountChange = (e) => {
//         const amount = e.target.value
//         this.setState(() => ({amount}))
//     }

//     onNoteChange = (e) => {
//         const note = e.target.value
//         this.setState(() => ({note}))
//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         // this.props.onSubmit({
//         //     description: this.state.description,
//         //     amount: this.state.amount,
//         //     note: this.state.note,
//         //     createdAt: this.state.createdAt.format('L')
//         // })
//         alert(this.state.startDate)
        
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit = {this.onSubmit}>
//                     <input type="text" placeholder="Appointment Description"
//                         value={this.state.description}
//                         onChange={this.onDescriptionChange}/>
//                     <input type="number" placeholder="Amount"
//                         value={this.state.amount}
//                         onChange={this.onAmountChange}/>
//                     <SingleDatePicker
//                         date={this.state.startDate} 
//                         onDateChange={date => this.setState({ startDate: date })} 
//                         //focused={this.state.focused} 
//                         //onFocusChange={({ focused }) => this.setState({ focused })}
//                         numberOfMonths={1} 
//                         isOutsideRange={() => false}/>
//                         <br />
//                          <SingleDatePicker
//                         date={this.state.endDate} 
//                         onDateChange={date => this.setState({ endDate: date })} 
//                         //focused={this.state.focused} 
//                         //onFocusChange={({ focused }) => this.setState({ focused })}
//                         numberOfMonths={1} 
//                         isOutsideRange={() => false}/>
//                         <br />
//                     <textarea placeholder="Add note for expense (optional)"
//                         value={this.state.note}
//                         onChange={this.onNoteChange}></textarea>
//                     <button>Create Appointment</button>
//                 </form>
//             </div>
//         )
//     }
// }


export default CreateAppointmentRender;