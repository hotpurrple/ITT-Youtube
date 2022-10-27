import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function NotificationSnackbar(props) {
  //   console.log(props);
  return (
    <>
      <Snackbar
        open={props.open}
        autoHideDuration={2000}
        onClose={props.handleCloseNotification}
      >
        <Alert
          onClose={props.handleCloseNotification}
          severity={props.severity}
          sx={{ width: "100%", backgroundColor: "gray" }}
        >
          Added to playlist {props.playlistName}
        </Alert>
      </Snackbar>
    </>
  );
}
