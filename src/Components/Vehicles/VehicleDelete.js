import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

export default function VehicleDelete(props) {
    return (
        <Dialog
            disableBackdropClick={true}
            open={true}
            onClose={props.actions.closeVehicleDeletePopup}
            aria-labelledby="delete vehicle"
            aria-describedby="selecting delete deletes vehicle permenently"
        >
            <DialogTitle id="alert-dialog-title">Delete Vehicle?</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you would like to delete the current vehicle? Clicking delete will permanently delete this vehicle record.
          </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.actions.closeVehicleDeletePopup()} color="primary">
                    Cancel
          </Button>
                <Button onClick={() => props.actions.deleteVehicle(props.vehicleData.rowData.id)} color="primary" autoFocus>
                    Delete
          </Button>
            </DialogActions>
        </Dialog>
    )
}