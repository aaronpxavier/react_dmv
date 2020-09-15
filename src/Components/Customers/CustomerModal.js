import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

export default function CustomerModal(props) {
    return (
        <Dialog
            disableBackdropClick={true}
            open={true}
            onClose={props.actions.closeCustomerModal}
            aria-labelledby="delete customer"
            aria-describedby="selecting delete deletes customer permenently"
        >
            <DialogTitle id="alert-dialog-title">Contact Info for Contact No. {props.contactData.rowData.id}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div>Name:  {props.contactData.rowData.num}</div>
                    <div>Email:   {props.contactData.rowData.type}</div>
                    <div>Age: {props.contactData.rowData.age}</div>
                    <div>Contact Number:  {props.contactData.rowData.number}</div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.actions.closeCustomerModal} color="primary">
                    Exit
      </Button>

            </DialogActions>
        </Dialog>
    )
}