import React from 'react';
import { Button, FormControl, Container, Box, makeStyles, InputLabel, MenuItem, FormGroup, Select, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab'
import {DRIVING_LICENSE, LEARNER_PERMIT} from '../../Constants/applicationTypes';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
    formControl: {
      paddingRight: '10px',
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


function createDynUserMenuItems(userArray) {
    let i = 0;
    let users = userArray.map(item => {
        let result = (<MenuItem key={i} value={i}>{item.fullname}</MenuItem>)
        ++i;
        return result;
    });
    return users;
}

function submitUpdate(appId, ownerId, applicationType, contactId, description, status, submitDate, action) {
    let entity = {};
    entity["ownerid@odata.bind"] = `/systemusers(${ownerId})`;
    entity.teamtwo_applicationname = applicationType;
    entity.teamtwo_applicationdescription = description;
    entity.teamtwo_approvedstatus = status;
    entity.teamtwo_submitdate = submitDate.toISOString();
    entity["teamtwo_ContactToApplicationId@odata.bind"] = `/contacts(${contactId})`;
    action(appId, entity);
}

function submitPost(ownerId, applicationType, contactId, description, status, submitDate, action) {
    console.log('is post')
    let entity = {};
    entity["ownerid@odata.bind"] = `/systemusers(${ownerId})`;
    entity.teamtwo_applicationdescription = description;
    entity.teamtwo_approvedstatus = status;
    entity.teamtwo_submitdate = submitDate.toISOString();
    entity.teamtwo_applicationname = applicationType;
    entity.teamtwo_name = "Created from react app";
    entity["teamtwo_ContactToApplicationId@odata.bind"] = `/contacts(${contactId})`;
    action(entity);
}

function redirectToApplicationsView(history) {
    history.push('/applications');
}
export default function EditApplication(props) {
    let { applicationData, actions } = props;
    let {data} = applicationData;
    let { contact } = applicationData;
    let currentDynUserIndex = 0;
    let hasDefaultUser = false;
    let appType = applicationData.appType;
    let dynUserArray = applicationData.dynUser.value;
    let ownerId = applicationData.ownerId;
    let date = applicationData.date || data && new Date(data.teamtwo_submitdate);
    let description = applicationData.descChanged ? applicationData.description : data && data.teamtwo_applicationdescription;
    let approvedStatus = applicationData.approvedStatus === undefined ? (data && data.teamtwo_approvedstatus) || false : applicationData.approvedStatus;
    let contactOptions = {
        options:  applicationData.contacts || [applicationData.contact],
        getOptionLabel: (option) => (option && option.fullname) || ""
    }
    for (let i = 0; i < dynUserArray.length; ++i) {
        if (dynUserArray[i].systemuserid === applicationData.ownerId) {
            currentDynUserIndex = i;
            hasDefaultUser = true;
            break;
        }
    }
    return (
        <Container>
            <Box>
            <h1 style={{paddingTop: '50px'}}>Edit Application <em>{(contact && contact.fullname) || ''}</em> ({(data && data.teamtwo_applicationid) || ''})</h1>
                
                <FormGroup row style={{marginTop: '50px'}}>
                    <FormControl style={{paddingRight: '10px'}} >
                        <InputLabel id="dynUserSelectLabel">Owner</InputLabel>
                        <Select
                        labelId="dynUserSelectLabel"
                        id="dynUserSelect"
                        value={hasDefaultUser ? currentDynUserIndex : 0}
                        onChange={e => actions.applicationOnwerChange(dynUserArray[e.target.value])}>
                            {createDynUserMenuItems(dynUserArray)}
                        </Select>
                    </FormControl>
                    <FormControl style={{paddingRight: '10px', minWidth: '100px', minHeight: '50px'}}>
                        <InputLabel id="applicationType">Type</InputLabel>
                        <Select
                        labelId="applicationType"
                        id="applicaiton-select"
                        value={applicationData.appType || (data && data.teamtwo_applicationname)}
                        onChange={e => actions.applicationTypeChange(e.target.value)}>
                            <MenuItem value={DRIVING_LICENSE}>Driver's License</MenuItem>
                            <MenuItem value={LEARNER_PERMIT}>Learner's Permit</MenuItem>
                        </Select>
                    </FormControl>
                    <Autocomplete
                        id="combo-box-demo"
                        onChange={(event, value) => {
                            value && actions.applicationContactChangeCommit(value);
                        }}
                        {...contactOptions}
                        style={{ width: 300 }}
                        value={{fullname: contact && contact.fullname}}
                        renderInput={(params) => <TextField  onChange={e => actions.applicationContactFieldKeyup(e.target.value)} {...params}  label="Driver Applicable TO"  />}
                    />
                </FormGroup>
                <FormGroup row style={{marginTop: '20px'}}>
                    <FormControl style={{paddingRight: '10px'}}>
                        <InputLabel id="approved-status-label">Status</InputLabel>
                        <Select
                        labelId="approved-status-label"
                        id="applicaiton-select"
                        value={approvedStatus ? 1 : 0}
                        onChange={e => actions.approvedStatusChanged(e.target.value === 1 ? true : false)}>
                            <MenuItem value={1}>Approved</MenuItem>
                            <MenuItem value={0}>Not Approved</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="description"
                        label="Description"
                        multiline
                        rowsMax={4}
                        value={description}
                        onChange={(e) => actions.descriptionFieldChanged(e.target.value)}
                    />
                </FormGroup>
                <FormGroup row style={{marginTop: '10px'}}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="submitDate"
                            label="Submit Date"
                            value={date}
                            onChange={date => actions.dateFieldChanged(date)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </FormGroup>
                <FormGroup row style={{marginTop: '20px'}}>
                <Button 
                    style={{marginRight: '10px'}} 
                    onClick={() => {
                        applicationData.isPost ? 
                            submitPost( ownerId, appType, contact && contact.contactid, description, approvedStatus, date, actions.postApplication)
                            : submitUpdate(data.teamtwo_applicationid, ownerId, appType, contact && contact.contactid, description, approvedStatus, date, actions.editApplicaitonSubmit)
                    }} 
                    variant="contained" 
                    color="primary"
                    >
                    Submit
                </Button>
                <Button variant="contained" color="secondary" onClick={()=>redirectToApplicationsView(props.history)}>Cancel</Button>
                </FormGroup>
                
            </Box>
        </Container>
    )
}
