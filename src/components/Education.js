import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Summary() {
  const textdata = ` Group loan processing system application built with purpose
   of providing loan to women for Agri and small batches. this application web based responsive
    application. It supports all devices.
  In this application we implemented file Operations like pdf Download and Zip File Download. and also,
   Images upload and images download load, Global Search
  `;
  const textdatasasf = ` working with banking loan system where it has to handle rupee 
    term loan and foreign currency loan, where, I worked on react components &
    handling business logics. In this application creating Dynamic Master pages.     
    Create Json file and by using Json file render master pages Dynamically. Two
     factor authentication, change password and forgot password functionalities `;

  return (
    <>
      <Paper elevation={16} sx={{ p: 2 }}>
        <h3>Education</h3>
        <p>
          <b> Samskruthi College of Engg and Tech</b>
        </p>
        <p>
          <b> Bachelor of Technology (JNTUH)</b>
        </p>
        <p>percentage: 64%</p>
        <p>2014 - passout,</p>
        <p>
          {"  "}
          <LocationOnIcon className="me-2"></LocationOnIcon>
          Hyderabad • Telangana, India{" "}
        </p>
        <hr></hr>
        <p>
          <b> R. D . Junior College</b>
        </p>
        <p>
          <b> MPC ( Board of Intermediate Education )</b>
        </p>
        <p>percentage: 82%</p>
        <p>
          <LocationOnIcon className="me-2"></LocationOnIcon>
          Warangal • Telangana, India{" "}
        </p>
        <hr></hr>
        <p>
          <b> Santhinikethan Vidyalayam</b>
        </p>
        <p>
          <b> 10th (ssc)</b>
        </p>
        <p>percentage: 75%</p>
        <p>
          <LocationOnIcon className="me-2"></LocationOnIcon>
          Warangal • Telangana, India{" "}
        </p>
      </Paper>
    </>
  );
}
