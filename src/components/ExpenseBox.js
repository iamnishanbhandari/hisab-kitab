import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogActions,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { uploadImage } from "../Firebaseconfig/storage";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
const ExpenseBox = ({ onClose }) => {
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [files, setFiles] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const authUser = getAuth();
  const firestore = getFirestore();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const storage = getStorage();
      const fileRef = ref(storage, `expenseImages/${files[0].name}`);
      const snapshot = await uploadBytes(fileRef, files[0]);

      const expenseData = {
        ...formData,
        imageUrl: await getDownloadURL(fileRef),
      };
      console.log(formData)

      console.log(expenseData);
      await addDoc(collection(firestore, "expenses"), expenseData);

      setFormData({});
      setFiles(null);
      handleClose();
      setSnackbarSeverity("success");
      setSnackbarMessage("Expense added successfully!");
    } catch (error) {
      console.log("Error uploading image to Firebase Storage:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage("Error adding expense. Please try again.");
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
    setFormData({});
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (files) {
      setFiles(files);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };
  return (
    <>
      <Box mt={10} ml={10}>
        <Button onClick={() => setOpen(true)}>
          <Typography variant="h5" color="primary">
            EXPENSES +
          </Typography>
        </Button>
      </Box>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>ADD EXPENSES</DialogTitle>
        <DialogContent
          sx={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
          {imageUrl && <img src={imageUrl} alt="Selected" height={100} />}
          <input type="file" onChange={handleInputChange}></input>
        </DialogContent>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={formData.name}
            onChange={handleInputChange}
          ></TextField>

          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            value={formData.address}
            onChange={handleInputChange}
          ></TextField>

          <TextField
            autoFocus
            margin="dense"
            id="Items"
            label="Items"
            type="text"
            fullWidth
            variant="standard"
            value={formData.Items}
            onChange={handleInputChange}
          ></TextField>

          <TextField
            autoFocus
            margin="dense"
            id="Amount"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
            value={formData.amount}
            onChange={handleInputChange}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        onExited={() => {
          setSnackbarSeverity("success");
          setSnackbarMessage("");
        }}
      >
        <Alert severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      ;
    </>
  );
};

export default ExpenseBox;
