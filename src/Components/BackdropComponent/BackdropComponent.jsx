import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";


export default function BackdropComponent(props) { //open true or false идва от parent component-а
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
