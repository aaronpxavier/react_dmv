import React, {useState} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import "./Appointment.css"



function CreateAppointment(props) {
    console.log("Create Appointment Props", props)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [contacts,setContacts] = useState(props.appointmentData.contactData.value)
    
   
    function onSubmit(e){
      e.preventDefault();
      let appointment = {}
       appointment["regardingobjectid_contact_appointment@odata.bind"] = "/contacts(f60af183-9cc7-ea11-a812-000d3a8faaa7)";
       appointment.subject = "Where can I get a Working from onSubmit";
       appointment.scheduledstart = startDate.toISOString();
       appointment.scheduledend = endDate.toISOString();
       props.actions.postAppointments(appointment);
       props.history.push('/appointments');
       //props.actions.getAppointmentsContactId();
      console.log(startDate.toISOString())
      console.log(endDate.toISOString())
      console.log({contacts})
      //console.log(startDate)
    }

    return (
      <div className = "form-container">
      <form onSubmit = {onSubmit}>       
          
        <input type = "text" ></input>  
    
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
        <select>
            {contacts.map(contact => (
              <option
                key={contact.contactid}
                value={contact.fullname}
              >
                {contact.fullname}
              </option>
            ))}
        </select>
   
        <button>Submit</button>
      </form>
      </div>
    );
  }

  export default CreateAppointment;

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