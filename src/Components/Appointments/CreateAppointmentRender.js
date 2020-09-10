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
import Spinner from '../Spinner/spinner';
import { render } from '@testing-library/react';
import CreateAppointment from './CreateAppointment'


function CreateAppointmentRender(props) {

   console.log("Appointment Render", props);   
  // let { applicationData } = props;
    if(props.appointmentData.requestPending) {
        return (<Spinner></Spinner>)
    } else if (props.appointmentData.contactSuccess) {
        return(<CreateAppointment {...props}/>)
    }
    else{
      return(<div>Something Went Wrong :-(</div>)
    }
  //   } else if (applicationData.requestSuccessful) {
  //       props.history.push('/applications');
  //   }
  //   return(<h1>Something Went Wrong :(</h1>)
    // const {value} = props.appointmentData.contactData
    // console.log(typeof(props.appointmentData.contactData));
    // console.log(value)
    // if(props.appointmentData.contactData !== undefined){
    //    console.log(props.appointmentData.contactData.value);
    //  }

      // const [contactList,setContactsList] = useState([])
      // const [startDate, setStartDate] = useState(new Date());
      // const [endDate, setEndDate] = useState(new Date());
    //const [contactList,setContactsList] = useState(this.props.appointmentData.value)

    //  console.log("These are the props ",appointment)
    //  let content = (<div>hello</div>)
    // console.log("Contact List", contactList )

    //  let content = "";
    //  if(appointment.appointmentData.requestPending){
      
    //   content = (<Spinner></Spinner>)      
   
    //  }

    //  if(appointment.appointmentData.contactSuccess){
     
    //   // const arrayOfContacts = props.appointmentData.contactData.value;    
      
    //   // setContactsList(arrayOfContacts)
    //   // console.log("This is list >>>>>>>>>>>>>>>",contactList);
    //   content = ( <div>
    //     <form onSubmit = {onSubmit}>
    //     <input type="text" placeholder="Appointment Description"></input>   
    //     <label for="cars">Choose a car:</label>
    
    // <select name="contacts" id="cars">
    //   <option value="volvo">Volvo</option>
    //   <option value="saab">Saab</option>
    //   <option value="mercedes">Mercedes</option>
    //   <option value="audi">Audi</option>
    // </select> 
    //     <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    //     <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
    //     <button>Create Appointment</button>
    
    //                     </form>
    //     </div>)
     
    //  }
    
     

    

    // function onSubmit(){
    //   alert("Hi There")
    // }

    
    
  // return (
  //   <h1>Appointment Create</h1>
   
  // );
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