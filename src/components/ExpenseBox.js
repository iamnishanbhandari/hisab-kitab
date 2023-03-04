import {
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    DialogActions,
    Button,
    Typography
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React, { useState } from "react";
  
  const ExpenseBox = ({ onClose }) => {
    const [formData, setFormData] = useState({});
    const [open, setOpen] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onClose();
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    return (
      <>
      <Box mt={10} ml={10}>
        <Button onClick={() => setOpen(true)} >
          <Typography variant="h5" color="primary">
            EXPENSES +
          </Typography>
        </Button>
        </Box>
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>ADD EXPENSES</DialogTitle>
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
            <Button onClick={onClose}>Close</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  
  export default ExpenseBox;
  