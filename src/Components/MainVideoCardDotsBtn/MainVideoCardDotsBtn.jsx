import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

import * as HiIcons from "react-icons/hi";
import { useState } from "react";

import { Divider, Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./MainVideoCardDotsBtn.css";

export default function MainVideoCardDotsBtn(props) {
  //тук идва цялото инфо за видеото
  const [dialogShown, setDialogShown] = useState(false);

  return (
    <div className={props.className}>
      <IconButton
        variant="contained"
        onClick={() => setDialogShown(!dialogShown)}
      >
        <HiIcons.HiDotsHorizontal />
      </IconButton>

      <Dialog
        // className="modalDialog"
        onClose={() => setDialogShown(!dialogShown)}
        open={dialogShown}
      >
        <DialogTitle>Add to playlist</DialogTitle>
        <div className="viewPlaylists">
          <FormControlLabel control={<Checkbox />} label="Playlist 1" />
          <FormControlLabel control={<Checkbox />} label="Playlist 2" />
          <FormControlLabel control={<Checkbox />} label="Playlist 3" />
        </div>
        <Divider />

        <Button variant="text" color="primary">
          Create new playlist
        </Button>
      </Dialog>
    </div>
  );
}
