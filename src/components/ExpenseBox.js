// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogTitle,
// // //   TextField,
// // //   DialogActions,
// // //   Button,
// // //   Typography,
// // //   Snackbar,
// // //   Alert,
// // // } from "@mui/material";
// // // import { Box } from "@mui/system";
// // // import React, { useState } from "react";
// // // import { getAuth } from "firebase/auth";
// // // import { uploadImage } from "../Firebaseconfig/storage";
// // // import { getStorage, ref, uploadBytes } from "firebase/storage";
// // // import { getFirestore, collection, addDoc } from "firebase/firestore";
// // // import { getDownloadURL } from "firebase/storage";
// // // const ExpenseBox = ({ onClose }) => {
// // //   const [formData, setFormData] = useState({});
// // //   const [open, setOpen] = useState(false);
// // //   const [imageUrl, setImageUrl] = useState("");
// // //   const [files, setFiles] = useState(null);
// // //   const [snackbarOpen, setSnackbarOpen] = useState(false);
// // //   const [snackbarSeverity, setSnackbarSeverity] = useState("success");
// // //   const [snackbarMessage, setSnackbarMessage] = useState("");

// // //   const [userData, setUserData] = useState({
// // //     name: "",
// // //     address: "",
// // //     amount: "",
// // //     items: "",
// // //   });

// // //   let name, value;
// // //   const handleInputChange = (event) => {
// // //     name = event.target.name;
// // //     value = event.target.value;
// // //     setUserData({ ...userData, [name]: value });
// // //   };

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();
// // //     const { name, address, amount, items } = userData;
// // //     if (name && address && amount && items) {
// // //       const res = fetch(
// // //         "https://hisab-kitab-1bbd9-default-rtdb.firebaseio.com/userDataRecord.json",
// // //         {
// // //           method: "POST",
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //           },
// // //           body: JSON.stringify({
// // //             name,
// // //             address,
// // //             amount,
// // //             items,
// // //           }),
// // //         }
// // //       );

// // //       if (res) {
// // //         alert("Data Stored");
// // //         setUserData({
// // //           name: "",
// // //           address: "",
// // //           amount: "",
// // //           items: "",
// // //         });
// // //       }
// // //     } else {
// // //       alert("plz fill the data");
// // //     }
// // //   };

// // //   // const authUser = getAuth();
// // //   // const firestore = getFirestore();

// // //   // const handleSubmit = async (event) => {
// // //   //   event.preventDefault();

// // //   //   try {
// // //   //     const storage = getStorage();
// // //   //     const fileRef = ref(storage, `expenseImages/${files[0].name}`);
// // //   //     const snapshot = await uploadBytes(fileRef, files[0]);

// // //   //     const expenseData = {
// // //   //       ...formData,
// // //   //       imageUrl: await getDownloadURL(fileRef),
// // //   //     };
// // //   //     console.log(formData)

// // //   //     console.log(expenseData);
// // //   //     await addDoc(collection(firestore, "expenses"), expenseData);

// // //   //     setFormData({});
// // //   //     setFiles(null);
// // //   //     handleClose();
// // //   //     setSnackbarSeverity("success");
// // //   //     setSnackbarMessage("Expense added successfully!");
// // //   //   } catch (error) {
// // //   //     console.log("Error uploading image to Firebase Storage:", error);
// // //   //     setSnackbarSeverity("error");
// // //   //     setSnackbarMessage("Error adding expense. Please try again.");
// // //   //   } finally {
// // //   //     setSnackbarOpen(true);
// // //   //   }
// // //   // };

// // //   const handleClose = () => {
// // //     setOpen(false);
// // //     onClose();
// // //     setFormData({});
// // //   };

// // //   // const handleInputChange = (event) => {
// // //   //   const { name, value, files } = event.target;

// // //   //   if (files) {
// // //   //     setFiles(files);
// // //   //     const reader = new FileReader();
// // //   //     reader.onload = (e) => {
// // //   //       setImageUrl(e.target.result);
// // //   //     };
// // //   //     reader.readAsDataURL(files[0]);
// // //   //   } else {
// // //   //     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
// // //   //   }
// // //   // };
// // //   const handleSnackbarClose = (event, reason) => {
// // //     if (reason === "clickaway") {
// // //       return;
// // //     }

// // //     setSnackbarOpen(false);
// // //   };
// // //   return (
// // //     <>
// // //       <Box mt={10} ml={10}>
// // //         <Button onClick={() => setOpen(true)}>
// // //           <Typography variant="h5" color="primary">
// // //             EXPENSES +
// // //           </Typography>
// // //         </Button>
// // //       </Box>
// // //       <Dialog open={open} onClose={onClose}>
// // //         <DialogTitle>ADD EXPENSES</DialogTitle>
// // //         <DialogContent
// // //           sx={{ display: "flex", alignItems: "center", gap: "20px" }}
// // //         >
// // //           {imageUrl && <img src={imageUrl} alt="Selected" height={100} />}
// // //           <input type="file" onChange={handleInputChange}></input>
// // //         </DialogContent>

// // //         <DialogContent>
// // //           <TextField
// // //             autoFocus
// // //             margin="dense"
// // //             id="name"
// // //             name="name"
// // //             label="Name"
// // //             type="text"
// // //             fullWidth
// // //             variant="standard"
// // //             value={formData.name}
// // //             onChange={handleInputChange}
// // //           ></TextField>

// // //           <TextField
// // //             autoFocus
// // //             margin="dense"
// // //             id="address"
// // //             name="address"
// // //             label="Address"
// // //             type="text"
// // //             fullWidth
// // //             variant="standard"
// // //             value={formData.address}
// // //             onChange={handleInputChange}
// // //           ></TextField>

// // //           <TextField
// // //             autoFocus
// // //             margin="dense"
// // //             id="Items"
// // //             label="Items"
// // //             name="items"
// // //             type="text"
// // //             fullWidth
// // //             variant="standard"
// // //             value={formData.items}
// // //             onChange={handleInputChange}
// // //           ></TextField>

// // //           <TextField
// // //             autoFocus
// // //             margin="dense"
// // //             id="Amount"
// // //             label="Amount"
// // //             name="amount"
// // //             type="number"
// // //             fullWidth
// // //             variant="standard"
// // //             value={formData.amount}
// // //             onChange={handleInputChange}
// // //           ></TextField>
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={handleClose}>Close</Button>
// // //           <Button onClick={handleSubmit}>Submit</Button>
// // //         </DialogActions>
// // //       </Dialog>
// // //       <Snackbar
// // //         open={snackbarOpen}
// // //         autoHideDuration={4000}
// // //         onClose={handleSnackbarClose}
// // //         onExited={() => {
// // //           setSnackbarSeverity("success");
// // //           setSnackbarMessage("");
// // //         }}
// // //       >
// // //         <Alert severity={snackbarSeverity} sx={{ width: "100%" }}>
// // //           {snackbarMessage}
// // //         </Alert>
// // //       </Snackbar>
// // //       ;
// // //     </>
// // //   );
// // // };

// // // export default ExpenseBox;







// // import React from 'react'
// // import { Box, Typography } from '@mui/material'

// // const ExpenseBox = () => {
// //   return (
// // <>

// // <Box>
// // <Typography>Name:</Typography>
// // <Typography>address:</Typography>
// // <Typography>items:</Typography>
// // <Typography>amount:</Typography>


// // </Box>

// // </>
// //     )
// // }

// // export default ExpenseBox







// // import {
// //     Dialog,
// //     DialogContent,
// //     DialogTitle,
// //     TextField,
// //     DialogActions,
// //     Button,
// //     Typography,
// //     Snackbar,
// //     Alert,
// //   } from "@mui/material";
// //   import { Box } from "@mui/system";
// //   import React, { useState } from "react";
// //   import { getAuth } from "firebase/auth";
// //   import { uploadImage } from "../Firebaseconfig/storage";
// //   import { getStorage, ref, uploadBytes } from "firebase/storage";
// //   import { getFirestore, collection, addDoc } from "firebase/firestore";
// //   import { getDownloadURL } from "firebase/storage";
// //   import { getDatabase, ref as dbRef, onValue } from "firebase/database";

// //   const Expense = ({ onClose }) => {
// //     const [formData, setFormData] = useState({});
// //     const [open, setOpen] = useState(false);
// //     const [imageUrl, setImageUrl] = useState("");
// //     const [files, setFiles] = useState(null);
// //     const [snackbarOpen, setSnackbarOpen] = useState(false);
// //     const [snackbarSeverity, setSnackbarSeverity] = useState("success");
// //     const [snackbarMessage, setSnackbarMessage] = useState("");
// //     const [expenses, setExpenses] = useState([]);



// //     const [userData, setUserData] = useState({
// //       name: "",
// //       address: "",
// //       amount: "",
// //       items: "",
// //     });
  
// //     let name, value;
// //     const handleInputChange = (event) => {
// //       name = event.target.name;
// //       value = event.target.value;
// //       setUserData({ ...userData, [name]: value });
// //     };
  
// //     // const handleRetrieveExpenses = async () => {
// //     //     try {
// //     //       const db = getDatabase();
// //     //       const expensesRef = dbRef(db, "expenses");
// //     //       onValue(expensesRef, (snapshot) => {
// //     //         const expensesArray = [];
// //     //         snapshot.forEach((childSnapshot) => {
// //     //           const expense = {
// //     //             id: childSnapshot.key,
// //     //             ...childSnapshot.val(),
// //     //           };
// //     //           expensesArray.push(expense);
// //     //         });
// //     //         setExpenses(expensesArray);
// //     //       });
// //     //     } catch (error) {
// //     //       console('t handle the error:', error);
        
// //     //     };        }
// //     // }


    
// //     const handleSubmit = async (event) => {
// //         event.preventDefault();
// //         const { name, address, amount, items } = userData;
// //         if (name && address && amount && items) {
// //           try {
// //             const db = getDatabase();
// //             await addDoc(collection(db, "expenses"), {
// //               name,
// //               address,
// //               amount,
// //               items,
// //             });
// //             alert("Data Stored");
// //             setUserData({
// //               name: "",
// //               address: "",
// //               amount: "",
// //               items: "",
// //             });
// //           } catch (error) {
// //             console.log("Error adding expense to Firebase:", error);
// //             alert("Error adding expense. Please try again.");
// //           }
// //         } else {
// //           alert("Please fill in all fields.");
// //         }
// //       };


// //     // const handleSubmit = async (event) => {
// //     //     event.preventDefault();
// //     //     const { name, address, amount, items } = userData;
// //     //     if (name && address && amount && items) {
// //     //       try {
// //     //         const db = getDatabase();
// //     //         await addDoc(collection(db, "expenses"), {
// //     //           name,
// //     //           address,
// //     //           amount,
// //     //           items,
// //     //         });
// //     //         alert("Data Stored");
// //     //         setUserData({
// //     //           name: "",
// //     //           address: "",
// //     //           amount: "",
// //     //           items: "",
// //     //         });
// //     //       } catch (error) {
// //     //         console.log("Error adding expense to Firebase:", error);
// //     //         alert("Error adding expense. Please try again.");
// //     //       }
// //     //     } else {
// //     //       alert("Please fill in all fields.");
// //     //     }
// //     //   };
  
// //     // const authUser = getAuth();
// //     // const firestore = getFirestore();
  
// //     // const handleSubmit = async (event) => {
// //     //   event.preventDefault();
  
// //     //   try {
// //     //     const storage = getStorage();
// //     //     const fileRef = ref(storage, `expenseImages/${files[0].name}`);
// //     //     const snapshot = await uploadBytes(fileRef, files[0]);
  
// //     //     const expenseData = {
// //     //       ...formData,
// //     //       imageUrl: await getDownloadURL(fileRef),
// //     //     };
// //     //     console.log(formData)
  
// //     //     console.log(expenseData);
// //     //     await addDoc(collection(firestore, "expenses"), expenseData);
  
// //     //     setFormData({});
// //     //     setFiles(null);
// //     //     handleClose();
// //     //     setSnackbarSeverity("success");
// //     //     setSnackbarMessage("Expense added successfully!");
// //     //   } catch (error) {
// //     //     console.log("Error uploading image to Firebase Storage:", error);
// //     //     setSnackbarSeverity("error");
// //     //     setSnackbarMessage("Error adding expense. Please try again.");
// //     //   } finally {
// //     //     setSnackbarOpen(true);
// //     //   }
// //     // };
  
// //     const handleClose = () => {
// //       setOpen(false);
// //       onClose();
// //       setFormData({});
// //     };
  
// //     // const handleInputChange = (event) => {
// //     //   const { name, value, files } = event.target;
  
// //     //   if (files) {
// //     //     setFiles(files);
// //     //     const reader = new FileReader();
// //     //     reader.onload = (e) => {
// //     //       setImageUrl(e.target.result);
// //     //     };
// //     //     reader.readAsDataURL(files[0]);
// //     //   } else {
// //     //     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
// //     //   }
// //     // };
// //     const handleSnackbarClose = (event, reason) => {
// //       if (reason === "clickaway") {
// //         return;
// //       }
  
// //       setSnackbarOpen(false);
// //     };




// //     const handleRetrieveExpenses = async () => {
// //         try {
// //           const res = await fetch(
// //             "https://hisab-kitab-1bbd9-default-rtdb.firebaseio.com/userDataRecord.json"
// //           );
// //           const data = await res.json();
// //           const expensesArray = Object.entries(data).map(([id, value]) => ({
// //             id,
// //             ...value,
// //           }));
// //           setExpenses(expensesArray);
// //         } catch (error) {
// //           console.log("Error retrieving expenses from Firebase:", error);
        
// //       };

// // //     return (
// // //       <>
// // //         <Box mt={10} ml={10}>
// // //           <Button onClick={() => setOpen(true)}>
// // //             <Typography variant="h5" color="primary">
// // //               EXPENSES +
// // //             </Typography>
// // //           </Button>
// // //         </Box>
// // //         <Dialog open={open} onClose={onClose}>
// // //           <DialogTitle>ADD EXPENSES</DialogTitle>
// // //           <DialogContent
// // //             sx={{ display: "flex", alignItems: "center", gap: "20px" }}
// // //           >
// // //             {imageUrl && <img src={imageUrl} alt="Selected" height={100} />}
// // //             <input type="file" onChange={handleInputChange}></input>
// // //           </DialogContent>
  
// // //           <DialogContent>
// // //             <TextField
// // //               autoFocus
// // //               margin="dense"
// // //               id="name"
// // //               name="name"
// // //               label="Name"
// // //               type="text"
// // //               fullWidth
// // //               variant="standard"
// // //               value={formData.name}
// // //               onChange={handleInputChange}
// // //             ></TextField>
  
// // //             <TextField
// // //               autoFocus
// // //               margin="dense"
// // //               id="address"
// // //               name="address"
// // //               label="Address"
// // //               type="text"
// // //               fullWidth
// // //               variant="standard"
// // //               value={formData.address}
// // //               onChange={handleInputChange}
// // //             ></TextField>
  
// // //             <TextField
// // //               autoFocus
// // //               margin="dense"
// // //               id="Items"
// // //               label="Items"
// // //               name="items"
// // //               type="text"
// // //               fullWidth
// // //               variant="standard"
// // //               value={formData.items}
// // //               onChange={handleInputChange}
// // //             ></TextField>
  
// // //             <TextField
// // //               autoFocus
// // //               margin="dense"
// // //               id="Amount"
// // //               label="Amount"
// // //               name="amount"
// // //               type="number"
// // //               fullWidth
// // //               variant="standard"
// // //               value={formData.amount}
// // //               onChange={handleInputChange}
// // //             ></TextField>
// // //           </DialogContent>
// // //           <DialogActions>
// // //             <Button onClick={handleClose}>Close</Button>
// // //             <Button onClick={handleSubmit}>Submit</Button>
// // //           </DialogActions>
// // //         </Dialog>
// // //         <Snackbar
// // //           open={snackbarOpen}
// // //           autoHideDuration={4000}
// // //           onClose={handleSnackbarClose}
// // //           onExited={() => {
// // //             setSnackbarSeverity("success");
// // //             setSnackbarMessage("");
// // //           }}
// // //         >
// // //           <Alert severity={snackbarSeverity} sx={{ width: "100%" }}>
// // //             {snackbarMessage}
// // //           </Alert>
// // //         </Snackbar>
        
// // //         <Box mt={2} mx={2}>
// // //       {expenses.map((expense) => (
// // //         <Box key={expense.id} mt={2} sx={{ border: "1px solid black", p: 2 }}>
// // //           <Typography variant="h6">{expense.name}</Typography>
// // //           <Typography variant="subtitle1">{expense.address}</Typography>
// // //           <Typography variant="subtitle2">{expense.amount}</Typography>
// // //           <Typography variant="body1">{expense.items}</Typography>
// // //         </Box>
// // //       ))}
// // //     </Box>

// // //       </>
// // //     );
// // //       }}
// // //   export default Expense;
// // return (
// //     <>
// //       <Box mt={10} ml={10}>
// //         <Button onClick={() => setOpen(true)}>
// //           <Typography variant="h5" mt={30} color="primary">
// //             EXPENSES +
// //           </Typography>
// //         </Button>
// //       </Box>
// //       <Dialog open={open} onClose={onClose}>
// //         <DialogTitle>ADD EXPENSES</DialogTitle>
// //         <DialogContent
// //           sx={{ display: "flex", alignItems: "center", gap: "20px" }}
// //         >
// //           {imageUrl && <img src={imageUrl} alt="Selected" height={100} />}
// //           <input type="file" onChange={handleInputChange}></input>
// //         </DialogContent>

// //         <DialogContent>
// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             id="name"
// //             name="name"
// //             label="Name"
// //             type="text"
// //             fullWidth
// //             variant="standard"
// //             value={formData.name}
// //             onChange={handleInputChange}
// //           ></TextField>

// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             id="address"
// //             name="address"
// //             label="Address"
// //             type="text"
// //             fullWidth
// //             variant="standard"
// //             value={formData.address}
// //             onChange={handleInputChange}
// //           ></TextField>

// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             id="Items"
// //             label="Items"
// //             name="items"
// //             type="text"
// //             fullWidth
// //             variant="standard"
// //             value={formData.items}
// //             onChange={handleInputChange}
// //           ></TextField>

// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             id="Amount"
// //             label="Amount"
// //             name="amount"
// //             type="number"
// //             fullWidth
// //             variant="standard"
// //             value={formData.amount}
// //             onChange={handleInputChange}
// //           ></TextField>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose}>Close</Button>
// //           <Button onClick={handleSubmit}>Submit</Button>
// //         </DialogActions>
// //       </Dialog>
// //       <Snackbar
// //         open={snackbarOpen}
// //         autoHideDuration={4000}
// //         onClose={handleSnackbarClose}
// //         onExited={() => {
// //           setSnackbarSeverity("success");
// //           setSnackbarMessage("");
// //         }}
// //       >
// //         <Alert severity={snackbarSeverity} sx={{ width: "100%" }}>
// //           {snackbarMessage}
// //         </Alert>
// //       </Snackbar>
      
// //       <Box mt={2} mx={2}>
// //     {expenses.map((expense) => (
// //       <Box key={expense.id} mt={2} sx={{ border: "1px solid black", p: 2 }}>
// //         <Typography variant="h6">{expense.name}</Typography>
// //         <Typography variant="subtitle1">{expense.address}</Typography>
// //         <Typography variant="subtitle2">{expense.amount}</Typography>
// //         <Typography variant="body1">{expense.items}</Typography>
// //       </Box>
// //     ))}
// //   </Box>

// //     </>
// //   );
// //     }}  
// // export default Expense;


// import {
//     Dialog,
//     DialogContent,
//     DialogTitle,
//     TextField,
//     DialogActions,
//     Button,
//     Typography,
//     Snackbar,
//     Alert,
//   } from "@mui/material";
//   import { Box } from "@mui/system";
//   import React, { useState } from "react";
//   import { getAuth } from "firebase/auth";
//   import { uploadImage } from "../Firebaseconfig/storage";
//   import { getStorage, ref, uploadBytes } from "firebase/storage";
//   import { getFirestore, collection, addDoc } from "firebase/firestore";
//   import { getDownloadURL } from "firebase/storage";
//   import { useEffect } from "react";
//   import { getDatabase, onValue } from "firebase/database";
  
  
  
//   const Expense = ({ onClose }) => {
//     const [formData, setFormData] = useState({});
//     const [open, setOpen] = useState(false);
//     const [imageUrl, setImageUrl] = useState("");
//     const [files, setFiles] = useState(null);
//     const [snackbarOpen, setSnackbarOpen] = useState(false);
//     const [snackbarSeverity, setSnackbarSeverity] = useState("success");
//     const [snackbarMessage, setSnackbarMessage] = useState("");
//     const [expenses, setExpenses] = useState([]);
  
  
  
//     const [userData, setUserData] = useState({
//       name: "",
//       address: "",
//       amount: "",
//       items: "",
//     });
  
//     let name, value;
//     const handleInputChange = (event) => {
//       name = event.target.name;
//       value = event.target.value;
//       setUserData({ ...userData, [name]: value });
//     };
  
//     // useEffect(() => {
//     //   const db = getDatabase();
//     //   const expensesRef = ref(db, "userDataRecord");
  
//     //   onValue(expensesRef, (snapshot) => {
//     //     const expensesData = snapshot.val();
//     //     if (expensesData) {
//     //       const expensesList = Object.keys(expensesData).map((key) => ({
//     //         id: key,
//     //         ...expensesData[key],
//     //       }));
//     //       setExpenses(expensesList);
//     //     }
//     //   });
//     // }, []);
  
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       const { name, address, amount, items } = userData;
//       if (name && address && amount && items) {
//         alert("Data Stored");
//         const newExpense = {
//           name: name,
//           address: address,
//           amount: amount,
//           items: items,
//         };
//         setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
//         setUserData({
//           name: "",
//           address: "",
//           amount: "",
//           items: "",
//         });
//       } else {
//         alert("Please fill in all the data");
//       }
//     };
  
//     // const handleSubmit = async (event) => {
//     //   event.preventDefault();
//     //   handleRetrieveExpenses();
//     //   const { name, address, amount, items } = userData;
//     //   if (name && address && amount && items) {
//     //     const res = fetch(
//     //       "https://hisab-kitab-1bbd9-default-rtdb.firebaseio.com/userDataRecord.json",
//     //       {
//     //         method: "POST",
//     //         headers: {
//     //           "Content-Type": "application/json",
//     //         },
//     //         body: JSON.stringify({
//     //           name,
//     //           address,
//     //           amount,
//     //           items,
//     //         }),
//     //       }
//     //     );
  
//     //     if (res) {
//     //       alert("Data Stored");
//     //       setUserData({
//     //         name: "",
//     //         address: "",
//     //         amount: "",
//     //         items: "",
//     //       });
//     //     }
//     //   } else {
//     //     alert("plz fill the data");
//     //   }
//     // };
  
//     // const authUser = getAuth();
//     // const firestore = getFirestore();
  
//     // const handleSubmit = async (event) => {
//     //   event.preventDefault();
  
//     //   try {
//     //     const storage = getStorage();
//     //     const fileRef = ref(storage, `expenseImages/${files[0].name}`);
//     //     const snapshot = await uploadBytes(fileRef, files[0]);
  
//     //     const expenseData = {
//     //       ...formData,
//     //       imageUrl: await getDownloadURL(fileRef),
//     //     };
//     //     console.log(formData)
  
//     //     console.log(expenseData);
//     //     await addDoc(collection(firestore, "expenses"), expenseData);
  
//     //     setFormData({});
//     //     setFiles(null);
//     //     handleClose();
//     //     setSnackbarSeverity("success");
//     //     setSnackbarMessage("Expense added successfully!");
//     //   } catch (error) {
//     //     console.log("Error uploading image to Firebase Storage:", error);
//     //     setSnackbarSeverity("error");
//     //     setSnackbarMessage("Error adding expense. Please try again.");
//     //   } finally {
//     //     setSnackbarOpen(true);
//     //   }
//     // };
  
//     const handleClose = () => {
//       setOpen(false);
//       onClose();
//       setFormData({});
//     };
  
//     // const handleInputChange = (event) => {
//     //   const { name, value, files } = event.target;
  
//     //   if (files) {
//     //     setFiles(files);
//     //     const reader = new FileReader();
//     //     reader.onload = (e) => {
//     //       setImageUrl(e.target.result);
//     //     };
//     //     reader.readAsDataURL(files[0]);
//     //   } else {
//     //     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//     //   }
//     // };
//     const handleSnackbarClose = (event, reason) => {
//       if (reason === "clickaway") {
//         return;
//       }
  
//       setSnackbarOpen(false);
//     };
  
  
  
  
//     const handleRetrieveExpenses = async () => {
//         try {
//           const res = await fetch(
//             "https://hisab-kitab-1bbd9-default-rtdb.firebaseio.com/userDataRecord.json"
//           );
//           const data = await res.json();
//           const expensesArray = Object.entries(data).map(([id, value]) => ({
//             id,
//             ...value,
//           }));
//           setExpenses(expensesArray);
//         } catch (error) {
//           console.log("Error retrieving expenses from Firebase:", error);
//         }
//       };
  
//     return (
//       <>
//         <Box mt={10} ml={10}>
//           <Button onClick={() => setOpen(true)}>
//             <Typography variant="h5" color="primary">
//               EXPENSES +
//             </Typography>
//           </Button>
//         </Box>
//         <Dialog open={open} onClose={onClose}>
//           <DialogTitle>ADD EXPENSES</DialogTitle>
//           <DialogContent
//             sx={{ display: "flex", alignItems: "center", gap: "20px" }}
//           >
//             {imageUrl && <img src={imageUrl} alt="Selected" height={100} />}
//             <input type="file" onChange={handleInputChange}></input>
//           </DialogContent>
  
//           <DialogContent>
//             <TextField
//               autoFocus
//               margin="dense"
//               id="name"
//               name="name"
//               label="Name"
//               type="text"
//               fullWidth
//               variant="standard"
//               value={formData.name}
//               onChange={handleInputChange}
//             ></TextField>
  
//             <TextField
//               autoFocus
//               margin="dense"
//               id="address"
//               name="address"
//               label="Address"
//               type="text"
//               fullWidth
//               variant="standard"
//               value={formData.address}
//               onChange={handleInputChange}
//             ></TextField>
  
//             <TextField
//               autoFocus
//               margin="dense"
//               id="Items"
//               label="Items"
//               name="items"
//               type="text"
//               fullWidth
//               variant="standard"
//               value={formData.items}
//               onChange={handleInputChange}
//             ></TextField>
  
//             <TextField
//               autoFocus
//               margin="dense"
//               id="Amount"
//               label="Amount"
//               name="amount"
//               type="number"
//               fullWidth
//               variant="standard"
//               value={formData.amount}
//               onChange={handleInputChange}
//             ></TextField>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Close</Button>
//             <Button onClick={handleSubmit}>Submit</Button>
//           </DialogActions>
//         </Dialog>
        
     
//         <Snackbar
//           open={snackbarOpen}
//           autoHideDuration={4000}
//           onClose={handleSnackbarClose}
//           onExited={() => {
//             setSnackbarSeverity("success");
//             setSnackbarMessage("");
//           }}
//         >
//           <Alert severity={snackbarSeverity} sx={{ width: "100%" }}>
//             {snackbarMessage}
//           </Alert>
//         </Snackbar>
  
        
//         <Box mt={2} mx={2}>
//       {expenses.map((expense) => (
//         <Box key={expense.id} mt={2} sx={{ border: "1px solid black", p: 2 }}>
//           <Typography variant="h6">{expense.name}</Typography>
//           <Typography variant="subtitle1">{expense.address}</Typography>
//           <Typography variant="subtitle2">{expense.amount}</Typography>
//           <Typography variant="body1">{expense.items}</Typography>
//         </Box>
//       ))}
//     </Box>
  
//       </>
//     );
//   };
  
//   export default Expense;
  






















