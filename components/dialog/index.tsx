import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface AlertDialogInterface {
  open: boolean;
  handleAction: any;
  handleClose: any;
  title: string;
  descriptor: string;
  agreeText: string;
  disagreeText: string;
}
export default function AlertDialog(props: AlertDialogInterface): JSX.Element {
  const {
    open,
    handleAction,
    handleClose,
    title,
    descriptor,
    agreeText,
    disagreeText,
  } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {descriptor}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {disagreeText}
        </Button>
        <Button onClick={handleAction} autoFocus color="warning">
          {agreeText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
