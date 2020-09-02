import React, { forwardRef } from 'react';
import Modal from 'react-modal'
import { Container, Box, Fab } from "@material-ui/core";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Spinner  from '../Spinner/spinner';
import MaterialTable from 'material-table';
import AddIcon from '@material-ui/icons/Add';
import './Appointment.css'


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
 
 
const createTable = (applicationArry,reduxActions) => {
    let columns = [
        { title: 'Appointment #', field: 'num' },
        {title: 'Description',field:'text'},
        { title: 'Start Date', field: 'date' },
        { title: 'End Date', field: 'date' },
        { title: 'Contact Id', field: 'status' },
    ]
    let data = applicationArry.map(item => {
        return {
            num: item.teamtwo_appointmentnumber,
            text: item.subject,
            date: new Date(item.scheduledstart).toLocaleTimeString() + " " + new Date(item.scheduledstart).toDateString(),
            date: new Date(item.scheduledend).toLocaleTimeString() + " " + new Date(item.scheduledend).toDateString(),
            status: item.teamtwo_approvedstatus ? 'Approved': 'Not Approved'
        }
    })

    let actions=[
        {
            icon: () => <Delete color="secondary"></Delete>,
            tooltip: 'Delete Application',
            onClick:(event, rowData) => {
                console.log('delete table click');
            }
        },
        {
            icon: () => <Edit color="primary"></Edit>,
            tooltip: 'Edit Application',
            onClick:(event, rowData) => {
                console.log('edit table click');
            }
        }
        //this is where I have to trigger the action to create a new appointment
    ]

    return (
        <Container>
            <div style={{paddingTop: '50px'}}>
                <Fab onClick={()=> reduxActions.openAppointmentModal()} style={{margin: '10px'}}size='small' color="primary" aria-label="add">
                    <AddIcon />  
                </Fab>

                <MaterialTable
                    title='Appointments Table'
                    columns={columns}
                    data={data}
                    icons={tableIcons}
                    options={
                        {
                            pageSize: 10,
                            pageSizeOptions: [10],
                            exportButton: true,
                            exportAllData: true,
                            sorting: true,
                            rowStyle: {
                                '&:hover': {
                                    backgroundColor: '#bbdefb',
                                },
                            }
                        }
                    }
                    actions={actions}
                >
                </MaterialTable>
            </div>
        </Container>
    );
}



 function onSubmit(e){
    e.preventDefault();
    alert('hello')
    


}
function modal(actions) {
    
    console.log("Modal Actions " + actions)
    var entity = {};  
    entity["regardingobjectid_contact_appointment@odata.bind"] = "/contacts(40cda8ca-fcaf-ea11-a812-000d3a8faaa7)";
    entity.subject = "I made an appointment online, but I forgot my docs";
    entity.scheduledend = new Date("09/10/2020 09:00:00").toISOString();
    entity.scheduledstart = new Date("09/10/2020 08:30:00").toISOString();
    //actions.postAppointments(entity);
  return (
      <Modal isOpen={true}>
          <div className="modalContainer">
              <div className="modalCard">
                  <h2>Create an Appointment</h2>
            <form onSubmit = {onSubmit}>
              
               Start Date/Time<input type="datetime-local" id="start" name="appointment-start"  value="2018-07-22"
                    min="2018-01-01" max="2018-12-31" /> <br />
                    End Date/Time<input type="datetime-local" id="start" name="appointment-end"  value="2018-07-22"
                    min="2018-01-01" max="2018-12-31" /> <br />
               <textarea required rows="5" cols="28" placeholder="Appointment Description" /><br /><br />
               <button type = "Submit">Create Appointment</button>
               
             </form>
             <br />

                  <button onClick={() => actions.closeAppointmentModal()}>Close modal</button>
              </div>
          </div>

      </Modal >
  )
}

export default function ApplicationContainer(props) {
    
    console.log("Appointment Render Props", props)
    
    let {appointmentData} = props;
    let {actions} = props;
    if (appointmentData.requestPending) {
        return (<Spinner></Spinner>)       
    
    }     
    else if(appointmentData.openAppointmentPopup){
      console.log(appointmentData)
      return modal(actions);
    }
    else if (appointmentData.requestSuccessful) {
      return createTable(appointmentData.appArray,actions)
  }
 

    
   
    return (<div></div>)
}
