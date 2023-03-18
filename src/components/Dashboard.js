import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useAuth } from "../Firebaseconfig/auth";
import { CircularProgress } from "@mui/material";
import Expense from "./Expense";

const Dashboard = () => {
  const { authUser, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !authUser) {
window.location.href = '/'
    }
  }, [authUser, isLoading]);

  return !authUser ? (
    <CircularProgress color="inherit" sx={{ marginLeft: '50%', marginTop: '25%' }} />
    
  ) : (
    <div>
      <NavBar />
      <Expense/>

    </div>
  );
};

export default Dashboard;
