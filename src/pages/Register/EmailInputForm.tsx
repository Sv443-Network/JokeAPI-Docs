import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { FormControl } from "@mui/material";

function EmailInputForm() {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = React.useState("success");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Simulate a fake API call with a delay
      const response = await new Promise((resolve) =>
        setTimeout(resolve, 1000),
      );
      if (response) {
        setSnackbarSeverity("success");
      } else {
        setSnackbarSeverity("error");
      }
    } catch (error) {
      setSnackbarSeverity("error");
    } finally {
      setIsLoading(false);
      setOpenSnackbar(true);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <FormControl>
      <TextField
        label='Email'
        type='email'
        value={email}
        onChange={handleChange}
        fullWidth
      />
      <Button
        variant='contained'
        color='primary'
        disabled={isLoading}
        onClick={handleSubmit}
        endIcon={isLoading ? <CircularProgress size='small' /> : null}
      >
        {isLoading ? "Loading..." : "Submit"}
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
        >
          {snackbarSeverity === "success" ? "Success!" : "Error!"}
        </Alert>
      </Snackbar>
    </FormControl>
  );
}

export default EmailInputForm;
