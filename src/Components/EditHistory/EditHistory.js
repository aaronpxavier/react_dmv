import React from 'react'
import { Button, FormControl, Container, Box, makeStyles, InputLabel, MenuItem, FormGroup, Select, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    formControl: {
        paddingRight: '10px',
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function submitUpdate(historyId, contactId, description, points, historynumber, incidenttype, action) {
    let entity = {};
    entity["teamtwo_contactToDrivingHistoryId@odata.bind"] = `/contacts(${contactId})`
    entity.teamtwo_drivinghistorydescription = description
    entity.teamtwo_points = points
    entity.teamtwo_driving_history_number = historynumber
    entity.teamtwo_incidenttype = incidenttype
    action(historyId, entity)
}

export default function EditHistoryForm(props) {
    let { historyData, actions } = props
    let { contact } = historyData

    let contactOptions = {
        options: historyData.contacts || [historyData.contact],
        getOptionLabel: (option) => (option && option.fullname) || ""
    }

    return (
        <Container>
            <Box>
                <h1 style={{ paddingTop: '50px' }}>Edit History No ({(historyData && historyData.historyData.teamtwo_drivinghistoryid) || ''}) for <em>{(contact && contact.fullname) || ''}</em> </h1>

                <FormGroup row style={{ marginTop: '50px' }}>

                    <Autocomplete
                        id="combo-box-demo"
                        onChange={(event, value) => {
                            value && actions.historyContactChangeCommit(value);
                        }}
                        {...contactOptions}
                        style={{ width: 300 }}
                        value={{ fullname: contact && contact.fullname }}
                        renderInput={(params) => <TextField onChange={e => actions.historyContactSelection(e.target.value)} {...params} label="Driver Applicable To" />}
                    />
                </FormGroup>
                <FormGroup row style={{ marginTop: '20px' }}>
                    <TextField
                        id="incidenttype"
                        label="Incident Type"
                        multiline
                        rowsMax={2}
                        placeholder={props.historyData.historyData.teamtwo_incidenttype}
                        onChange={(e) => {
                            if (e.target.value === '') {
                                actions.historyIncidentTypeFieldChange(props.historyData.historyData.teamtwo_incidenttype)
                            } else {
                                actions.historyIncidentTypeFieldChange(e.target.value)
                            }
                        }
                        }
                    />
                </FormGroup>
                <FormGroup row style={{ marginTop: '20px' }}>
                    <TextField
                        id="description"
                        label="Description"
                        multiline
                        rowsMax={8}
                        placeholder={props.historyData.historyData.teamtwo_drivinghistorydescription}
                        onChange={(e) => {
                            if (e.target.value === '') {
                                actions.historyDescriptionFieldChange(props.historyData.historyData.teamtwo_drivinghistorydescription)
                            } else {
                                actions.historyDescriptionFieldChange(e.target.value)
                            }
                        }
                        }
                    />
                </FormGroup>
                <FormGroup row style={{ marginTop: '20px' }}>
                    <TextField
                        id="standard-number"
                        label="Points"
                        type="number"
                        placeholder={props.historyData.historyData.teamtwo_points}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            if (e.target.value === '') {
                                actions.historyPointsFieldChange(props.historyData.historyData.teamtwo_points)
                            } else {
                                actions.historyPointsFieldChange(e.target.value)
                            }
                        }
                        }
                    />
                </FormGroup>
                <FormGroup row style={{ marginTop: '20px' }}>
                    <TextField
                        id="description"
                        label="Driving History Number"
                        multiline
                        rowsMax={2}
                        placeholder={props.historyData.historyData.teamtwo_driving_history_number}
                        onChange={(e) => {
                            if (e.target.value === '') {
                                actions.historyNumberFieldChange(props.historyData.historyData.teamtwo_driving_history_number)
                            } else {
                                actions.historyNumberFieldChange(e.target.value)
                            }
                        }
                        }
                    />
                </FormGroup>
                <FormGroup row style={{ marginTop: '20px' }}>
                    <Button
                        style={{ marginRight: '10px', marginBottom: '20px' }}
                        onClick={() => {
                            submitUpdate(historyData.historyData.teamtwo_drivinghistoryid, contact && contact.contactid, historyData.description, historyData.historypoints, historyData.historynumber, historyData.incidenttype, actions.editHistorySubmit)
                        }}
                        variant="contained"
                        color="primary"
                    >
                        Submit
                </Button>
                    <Button variant="contained" color="secondary"
                        style={{ marginRight: '10px', marginBottom: '20px' }}
                        onClick={() => props.history.push('/history')}>
                        Cancel</Button>
                </FormGroup>

            </Box>
        </Container>
    )
}