import React from 'react'
import { Button, FormControl, Container, Box, makeStyles, InputLabel, MenuItem, FormGroup, Select, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        paddingRight: '10px',
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function submitUpdate(contactId, age, contactNumber, email, firstname, lastname, action) {
    let entity = {}
    entity.teamtwo_age = age
    entity.teamtwo_contactnumber = contactNumber
    entity.emailaddress1 = email
    entity.firstname = firstname
    entity.lastname = lastname
    action(contactId, entity)
}


export default function EditContact(props) {
    let { contactData, actions } = props
    let { contact } = contactData
    return (<Container>
        <Box>
            <h1 style={{ paddingTop: '50px' }}>Edit Contact No. {(contact.contactid) || ''} {(contact.fullname)}
            </h1>

            <FormGroup row style={{ marginTop: '20px' }}>
                <TextField
                    id="fullname"
                    label="First Name"
                    multiline
                    rowsMax={2}
                    placeholder={props.contactData.contact.firstname}
                    onChange={(e) => {
                        if (e.target.value === '') {
                            actions.firstnameFieldChange(props.contactData.contact.firstname)
                        } else {
                            actions.firstnameFieldChange(e.target.value)
                        }
                    }
                    }
                />
                <TextField
                    id="fullname"
                    label="Last Name"
                    multiline
                    rowsMax={2}
                    placeholder={props.contactData.contact.lastname}
                    onChange={(e) => {
                        if (e.target.value === '') {
                            actions.lastnameFieldChange(props.contactData.contact.lastname)
                        } else {
                            actions.lastnameFieldChange(e.target.value)
                        }
                    }
                    }
                />
            </FormGroup>
            <FormGroup row style={{ marginTop: '20px' }}>
                <TextField
                    id="standard-number"
                    label="Age"
                    type="number"
                    placeholder={props.contactData.contact.teamtwo_age}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => {
                        if (e.target.value === '') {
                            actions.ageFieldChange(props.contactData.contact.teamtwo_age)
                        } else {
                            actions.ageFieldChange(e.target.value)
                        }
                    }
                    }
                />
            </FormGroup>
            <FormGroup row style={{ marginTop: '20px' }}>
                <TextField
                    id="email"
                    label="Email"
                    multiline
                    rowsMax={2}
                    placeholder={props.contactData.contact.emailaddress1}
                    onChange={(e) => {
                        if (e.target.value === '') {
                            actions.emailFieldChange(props.contactData.contact.emailaddress1)
                        } else {
                            actions.emailFieldChange(e.target.value)
                        }
                    }
                    }
                />
            </FormGroup>
            <FormGroup row style={{ marginTop: '20px' }}>
                <TextField
                    id="fullname"
                    label="Contact Number"
                    multiline
                    rowsMax={2}
                    placeholder={props.contactData.contact.teamtwo_contactnumber}
                    onChange={(e) => {
                        if (e.target.value === '') {
                            actions.contactNumberFieldChange(props.contactData.contact.teamtwo_contactnumber)
                        } else {
                            actions.contactNumberFieldChange(e.target.value)
                        }
                    }
                    }
                />
            </FormGroup>


            <FormGroup row style={{ marginTop: '20px' }}>
                <Button
                    style={{ marginRight: '10px', marginBottom: '20px' }}
                    onClick={() => {
                        submitUpdate(props.contactData.contact.contactid, props.contactData.age, props.contactData.contactNumber, props.contactData.email, props.contactData.firstname, props.contactData.lastname, actions.editContactSubmit)
                    }}
                    variant="contained"
                    color="primary"
                >
                    Submit
            </Button>
                <Button variant="contained" color="secondary"
                    style={{ marginRight: '10px', marginBottom: '20px' }}
                    onClick={() => props.history.push('/customers')}>
                    Cancel</Button>
            </FormGroup>

        </Box>
    </Container >
    )
}