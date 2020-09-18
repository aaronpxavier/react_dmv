import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AsYouType } from 'libphonenumber-js'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';

const stateAbbreviations = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
];

function getStatesList() {
    let menuItemList = [];
    let i = 0;

    stateAbbreviations.forEach(state => {
        menuItemList.push(<MenuItem key={i} value={i}>{state}</MenuItem>)
        ++i;
    })
    return menuItemList;
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export default function EditApplicationAddContact(props) {
    const [businessPhone, onBusChange] = React.useState('');
    const [cellPhone, onCellChange] = React.useState('');
    const [fname, onFnameChange] = React.useState('');
    const [lname, onLnameChange] = React.useState('');
    const [date, onDateChange] = React.useState(Date.now());
    const [addrLine1, onAddrLine1Change] = React.useState('');
    const [addrLine2, onAddrLine2Change] = React.useState('');
    const [city, onCityChange] = React.useState('');
    const [state, onStateChange] = React.useState(0);
    const [zip, onZipChange ] = React.useState('');

    let busPhoneKeyUp = e => {
        let number = e.target.value;
        onBusChange(new AsYouType('US').input(number));

    }

    let cellPhoneKeyUp = e => {
        let number = e.target.value;
        onCellChange(new AsYouType('US').input(number));
    }

    let closeModal = () => {
        onBusChange('');
        onCellChange('');
        onDateChange(Date.now());
        onAddrLine1Change('')
        onFnameChange('');
        onLnameChange('');
        onAddrLine2Change('');
        onCityChange('');
        onStateChange(0);
        onZipChange('');
        props.setAddConModal(false);
    }

    let postContact = () => {
        let tempDate = date;

        if (!isNaN(tempDate)) {
            tempDate = new Date(tempDate);
        };
        let entity = {};
        entity.firstname = fname;
        entity.lastname = lname;
        entity.address1_line1 = addrLine1;
        entity.address1_line2 = addrLine2;
        entity.telephone1 =  businessPhone && businessPhone.substring(2);
        entity.mobilephone = cellPhone && cellPhone.substring(2);
        entity.teamtwo_dob = tempDate.toISOString();
        entity.address1_city = city;
        entity.address1_stateorprovince = stateAbbreviations[state];
        entity.address1_postalcode = zip;
        props.actions.addContact(entity);
    }
    return (
    <Dialog open={props.openContactModal} onClose={closeModal} aria-labelledby="add-contact-title">
        <DialogTitle id="add-contact-title">Add Driver</DialogTitle>
        <DialogContent>
        <div>
          <TextField
            autoFocus
            margin="dense"
            id="fname"
            label="First Name"
            type="Text"
            onChange={e => onFnameChange(e.target.value)}
            value={fname}
          />
          <TextField
            autoFocus
            margin="dense"
            id="lname"
            label="Last Name"
            type="Text"
            onChange={e => onLnameChange(e.target.value)}
            value={lname}
            />
        </div>
        <div>
        <TextField
            margin="dense"
            id="phone1"
            label="Business Phone"
            type="Text"
            onChange={e => busPhoneKeyUp(e)}
            value={businessPhone}
        />
        
            <TextField
                autoFocus
                margin="dense"
                id="phone2"
                label="Cell Number"
                type="Text"
                onChange={e => cellPhoneKeyUp(e)}
                value={cellPhone}
            />
        </div>
        <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="bday"
                            label="Date of Birth"
                            value={date}
                            onChange={date => onDateChange(new Date(date))}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
        </div>
        <div>
            <TextField 
                autoFocus
                margin="dense"
                id="street1"
                label="Address Line 1"
                type="Text"
                onChange={e => onAddrLine1Change(e.target.value)}
                value={addrLine1}
                fullWidth={true}
            />
        </div>
        <div>
            <TextField 
                autoFocus
                margin="dense"
                id="street2"
                label="Address Line 2"
                type="Text"
                onChange={e => onAddrLine2Change(e.target.value)}
                value={addrLine2}
                fullWidth={true}
            />
        </div>
        <div>
            <TextField 
                autoFocus
                margin="dense"
                id="city"
                label="City"
                type="Text"
                onChange={e => onCityChange(e.target.value)}
                value={city}
                fullWidth={false}
            />
        </div>
        <div>
            <InputLabel id="select-state">Select State</InputLabel>
            <Select
                id="select-state"
                value={state}
                onChange={e => onStateChange(e.target.value)}
                >
                {getStatesList()}
            </Select>
        </div>
        <div>
            <TextField 
                autoFocus
                margin="dense"
                id="zip"
                type="Text"
                onChange={e => onZipChange(e.target.value)}
                value={zip}
                fullWidth={false}
            />
        </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Cancel
          </Button>
          <Button onClick={postContact} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    )
}
