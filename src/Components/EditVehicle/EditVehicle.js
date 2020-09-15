import React from 'react'
import { Button, Container, Box, makeStyles, FormGroup, TextField } from '@material-ui/core';
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


function submitUpdate(vehicleId, contactId, make, model, vin, year, action) {
    let entity = {};
    entity["teamtwo_contactlookupid@odata.bind"] = `/contacts(${contactId})`
    entity.teamtwo_make = make
    entity.teamtwo_model = model
    entity.teamtwo_vin = vin
    entity.teamtwo_year = year
    action(vehicleId, entity)
}

function EditVehicleForm(props) {
    let { vehicleData, actions } = props
    let { contact } = vehicleData


    let contactOptions = {
        options: vehicleData.contacts || [vehicleData.contact],
        getOptionLabel: (option) => (option && option.fullname) || ""
    }

    return (
        <Container>
            <Box>
                <h1 style={{ paddingTop: '50px' }}>Edit Vehicle No ({(vehicleData && vehicleData.data.teamtwo_vehicleid) || ''}) for <em>{(contact && contact.fullname) || ''}</em> </h1>

                <FormGroup row style={{ marginTop: '50px' }}>

                    <Autocomplete
                        id="combo-box-demo"
                        onChange={(event, value) => {
                            value && actions.vehicleContactChangeCommit(value);
                        }}
                        {...contactOptions}
                        style={{ width: 300 }}
                        value={{ fullname: contact && contact.fullname }}
                        renderInput={(params) => <TextField onChange={e => actions.contactSelection(e.target.value)} {...params} label="Driver Applicable To" />}
                    />
                </FormGroup>
                <FormGroup row style={{ marginTop: '20px' }}>
                    <TextField
                        id="model"
                        label="model"
                        multiline
                        rowsMax={2}
                        placeholder={props.vehicleData.data.teamtwo_model}
                        onChange={(e) => {
                            if (e.target.value === '') {
                                actions.modelFieldChange(props.vehicleData.data.teamtwo_model)
                            } else {
                                actions.modelFieldChange(e.target.value)
                            }
                        }
                        }
                    />
                </FormGroup>
                <FormGroup row style={{ marginTop: '20px' }}>
                    <TextField
                        id="make"
                        label="make"
                        multiline
                        rowsMax={2}
                        placeholder={props.vehicleData.data.teamtwo_make}
                        onChange={(e) => {
                            if (e.target.value === '') {
                                actions.makeFieldChange(props.vehicleData.data.teamtwo_make)
                            } else {
                                actions.makeFieldChange(e.target.value)
                            }
                        }
                        }
                    />
                </FormGroup>
                <FormGroup row style={{ marginTop: '20px' }}>
                    <TextField
                        id="standard-number"
                        label="vin"
                        type="number"
                        placeholder={props.vehicleData.data.teamtwo_vin}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            if (e.target.value === '') {
                                actions.vinFieldChange(props.vehicleData.data.teamtwo_vin)
                            } else {
                                actions.vinFieldChange(e.target.value)
                            }
                        }
                        }
                    />
                    <TextField
                        id="standard-number"
                        label="year"
                        type="number"
                        placeholder={props.vehicleData.data.teamtwo_year}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {
                            if (e.target.value === '') {
                                actions.yearFieldChange(props.vehicleData.data.teamtwo_year)
                            } else {
                                actions.yearFieldChange(e.target.value)
                            }

                        }
                        }
                    />
                </FormGroup>

                <FormGroup row style={{ marginTop: '20px' }}>
                    <Button
                        style={{ marginRight: '10px', marginBottom: '20px' }}
                        onClick={() => {
                            submitUpdate(props.vehicleData.data.teamtwo_vehicleid, contact && contact.contactid, props.vehicleData.make, props.vehicleData.model, props.vehicleData.vin, props.vehicleData.year, actions.editVehicleSubmit)
                        }}
                        variant="contained"
                        color="primary"
                    >
                        Submit
                </Button>
                    <Button variant="contained" color="secondary"
                        style={{ marginRight: '10px', marginBottom: '20px' }}
                        onClick={() => props.history.push('/vehicles')}>
                        Cancel</Button>
                </FormGroup>

            </Box>
        </Container>
    )
}


export default EditVehicleForm