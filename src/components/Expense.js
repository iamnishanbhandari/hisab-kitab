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
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Expense = ({ onClose }) => {
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [expenses, setExpenses] = useState([]);

  const [userData, setUserData] = useState({
    name: "",
    address: "",
    amount: "",
    items: "",
  });

  let name, value;
  const handleInputChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, address, amount, items } = userData;
    const res = fetch(
      "https://hisab-kitab-1bbd9-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          address,
          amount,
          items,
        }),
      }
    );
    if (name && address && amount && items) {
      setSnackbarSeverity("success");
      setSnackbarMessage("Expense added successfully");
      setSnackbarOpen(true);
      const newExpense = {
        name: name,
        address: address,
        amount: amount,
        items: items,
      };
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      setUserData({
        name: "",
        address: "",
        amount: "",
        items: "",
      });
      setFormData({}); // reset formData state to empty object
    } else {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please fill all data");
      setSnackbarOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
    setFormData({});
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  useEffect(() => {
    fetch(
      "https://hisab-kitab-1bbd9-default-rtdb.firebaseio.com/userDataRecords.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const fetchedExpenses = [];
        for (const key in data) {
          fetchedExpenses.push({
            id: key,
            name: data[key].name,
            address: data[key].address,
            amount: data[key].amount,
            items: data[key].items,
          });
        }
        setExpenses(fetchedExpenses);
      });
  }, []);


  const handleDeleteExpense = (id) => {
    fetch(
      `https://hisab-kitab-1bbd9-default-rtdb.firebaseio.com/userDataRecords/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        setExpenses((prevExpenses) =>
          prevExpenses.filter((expense) => expense.id !== id)
        );
        setSnackbarSeverity("success");
        setSnackbarMessage("Expense deleted successfully");
        setSnackbarOpen(true);
      })
      .catch(() => {
        setSnackbarSeverity("error");
        setSnackbarMessage("Failed to delete expense");
        setSnackbarOpen(true);
      });
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
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={userData.name}
            onChange={handleInputChange}
          ></TextField>

          <TextField
            autoFocus
            margin="dense"
            id="address"
            name="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            value={userData.address}
            onChange={handleInputChange}
          ></TextField>

          <TextField
            autoFocus
            margin="dense"
            id="Items"
            label="Items"
            name="items"
            type="text"
            fullWidth
            variant="standard"
            value={userData.items}
            onChange={handleInputChange}
          ></TextField>

          <TextField
            autoFocus
            margin="dense"
            id="Amount"
            label="Amount"
            name="amount"
            type="number"
            fullWidth
            variant="standard"
            value={userData.amount}
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

      <Box mt={2} mx={2}>
        {expenses.map((expense) => (
          <Box key={expense.id} mt={2} sx={{ border: "1px solid black", p: 2 }}>
            <Typography variant="h6">{expense.name}</Typography>
            <Typography variant="subtitle1">{expense.address}</Typography>
            <Typography variant="subtitle2">{expense.amount}</Typography>
            <Typography variant="body1">{expense.items}</Typography>
            <IconButton onClick={handleDeleteExpense}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Expense;
