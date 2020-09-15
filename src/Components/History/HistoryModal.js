import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

export default function HistoryModal(props) {
    return (
        <Dialog
            disableBackdropClick={true}
            open={true}
            onClose={props.actions.closeHistoryModal}
            aria-labelledby="vehicle modal"
            aria-describedby="vehicle modal"
        >
            <DialogTitle id="alert-dialog-title">History Info for History Entry No. {props.historyData.rowData.id}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div><h2>Customer: {props.historyData.rowData.customer == undefined ? 'Customer not assigned' : props.historyData.rowData.customer}</h2></div>
                    <div>Type: {props.historyData.rowData.type}</div>
                    <div>Description: {props.historyData.rowData.description}</div>
                    <div>Points: {props.historyData.rowData.points}</div>
                    <div>History Number: {props.historyData.rowData.historyNumber}</div>
                    <div>State: {props.historyData.rowData.state}</div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.actions.closeHistoryModal} color="primary">
                    Exit
          </Button>

            </DialogActions>
        </Dialog>
    )
}