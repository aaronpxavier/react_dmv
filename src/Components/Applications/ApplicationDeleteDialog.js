import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'


export default function ApplicationDeleteDialog(props) {
  let { actions } = props;
  let rowData = props.applicationData.rowData;

  return (
    <Dialog
      open={true}
      onClose={actions.closeDeletePopup}
      aria-labelledby="delete application"
      aria-describedby="selecting delete deletes application permenently"
    >
      <DialogTitle id="alert-dialog-title">Delete Application?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you would like to delete application? Clicking delete will permanently delete record.
          </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={actions.closeDeletePopup} color="primary">
          Cancel
          </Button>
        <Button onClick={() => actions.deleteApplications(rowData.id, props.applicationData.appArray)} color="primary" autoFocus>
          Delete
          </Button>
      </DialogActions>
    </Dialog>
  )
}
