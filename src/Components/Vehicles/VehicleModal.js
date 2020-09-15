import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

export default function VehicleModal(props) {
    return (
        <Dialog
            disableBackdropClick={true}
            open={true}
            onClose={props.actions.closeVehicleModal}
            aria-labelledby="vehicle modal"
            aria-describedby="vehicle modal"
        >
            <DialogTitle id="alert-dialog-title">Vehicle Info for Vehicle No. {props.vehicleData.rowData.id}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div>Make:  {props.vehicleData.rowData.make}</div>
                    <div>Model: {props.vehicleData.rowData.model}</div>
                    <div>Vin:   {props.vehicleData.rowData.vin}</div>
                    <div>Year:  {props.vehicleData.rowData.year}</div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.actions.closeVehicleModal} color="primary">
                    Exit
          </Button>

            </DialogActions>
        </Dialog>
    )
}