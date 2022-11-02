import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

export default function ConfirmationDialogComponent(props) {
  return (
    <Dialog onClose={() => props.setDialogShown(false)} open={props.isOpen}>
      <DialogTitle> {props.question} </DialogTitle>

      <Button variant="text" color="primary" onClick={() => props.onBtnClick()}>
        {props.buttonText}
      </Button>
    </Dialog>
  );
}
