import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useSelector((state) => state.auth);
  return currentUser ? <Outlet/> : 
};

export default PrivateRouter;
