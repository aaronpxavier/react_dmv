import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

export default function CustomerDelete(props) {
    return (
        <Dialog
            disableBackdropClick={true}
            open={true}
            onClose={props.actions.closeContactDeletePopup}
            aria-labelledby="delete vehicle"
            aria-describedby="selecting delete deletes vehicle permenently"
        >
            <DialogTitle id="alert-dialog-title">Delete Contact?</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you would like to delete the current contact? Clicking delete will permanently delete this contact record.
          </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.actions.closeContactDeletePopup()} color="primary">
                    Cancel
          </Button>
                <Button onClick={() => props.actions.deleteContact(props.contactData.rowData.id)} color="primary" autoFocus>
                    Delete
          </Button>
            </DialogActions>
        </Dialog>
    )
}
