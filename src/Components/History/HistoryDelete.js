import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

export default function VehicleDelete(props) {
    return (
        <Dialog
            disableBackdropClick={true}
            open={true}
            onClose={props.actions.closeHistoryDeletePopup}
            aria-labelledby="delete vehicle"
            aria-describedby="selecting delete deletes driving history permenently"
        >
            <DialogTitle id="alert-dialog-title">Delete Driver History Entry?</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you would like to delete the current selected driving history entry? Clicking delete will permanently delete this history record.
          </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.actions.closeHistoryDeletePopup()} color="primary">
                    Cancel
          </Button>
                <Button onClick={() => props.actions.deleteHistory(props.historyData.rowData.id)} color="primary" autoFocus>
                    Delete
          </Button>
            </DialogActions>
        </Dialog>
    )
}