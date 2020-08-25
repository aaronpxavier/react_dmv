import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'


export default function ApplicationDeleteDialog(props) {
    
    return (
            <Dialog
                open={props.open}
                onClose={props.closeDialog}
                aria-labelledby="alert dialog delete"
                aria-describedby="alert dialog - would you like to delete selected application?"
                >

                <DialogTitle id="alert-dialog-title">Would you like to delete selected application?</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Deleted application can not be recovered. Are you sure?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.closeDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={props.closeDialog} color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
    )
}
