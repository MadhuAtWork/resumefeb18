import React, { useEffect, useState } from "react";
import Header from "./Header";
import Papercard from "./Skills";
import Achivments from "./Achivments";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Outlet } from "react-router-dom";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function Carts() {
  return (
    <>
      <div className="row main">
        <div className="clo-12">
          <Paper
            sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
            elevation={3}
          >
            <Header></Header>
          </Paper>
        </div>
      </div>

      <div className="container m-5">
        <div className="row">
          <div className="col-12  m-5">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#2196f3",
        }}
        elevation={16}
      >
        <div className="row p-3 text-white text-center  g-2">
          <div className="col-4">
            <PhoneInTalkIcon className="me-2"></PhoneInTalkIcon>
            {"  "} 8501056461
          </div>
          <div className="col-4">
            <EmailIcon className="me-2"></EmailIcon>
            {"  "} madhuch155@gmail.com
          </div>
          <div className="col-4">
            <LocationOnIcon className="me-2"></LocationOnIcon>
            {"  "} Hyderabad,Telangana
          </div>
        </div>
      </Paper>
    </>
  );
}
