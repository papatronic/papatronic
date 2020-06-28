import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function reload() {
  window.location.reload();
}

export default function AlertDialog(props) {
  let action = props.handleClose;
  if (props.shouldReload) action = reload;
  return (
    <>
      <Dialog
        style={{height: 'auto', width: 'auto' }}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          {
            props.children ? props.children :
            <DialogContentText id="alert-dialog-description">
              {props.message}
            </DialogContentText>
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={action} color="primary" autoFocus>
            Continuar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}