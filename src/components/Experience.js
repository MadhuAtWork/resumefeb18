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
        <h3>Experience</h3>
        <p>
          <b>CredenTek Software & Consultancy Pvt. Ltd.</b>
        </p>
        <p>
          <b>Software Engineer</b>
        </p>
        <p>
          2022 - Present,{"   "}{" "}
          <LocationOnIcon className="me-2"></LocationOnIcon>
          Pune,Maharastra{" "}
        </p>
        <p>
          <b># Group Loan Processing System (GLPS), (Jana Bank)</b>
        </p>
        <p>
          <b>Technologies:</b> React JS, Redux, Jest, MUI{" "}
        </p>
        <p>
          <b>Description:</b>
          {textdata}
        </p>
        <p>
          <b>#Stressed Assets Stabilisation Fund (SASF), (IDBI Bank)</b>
        </p>
        <p>
          <b> Technologies:</b> React JS, Redux, Jest, MUI{" "}
        </p>
        <p>
          {" "}
          <b>Description:</b>
          {textdatasasf}
        </p>
        <hr></hr>
        <p>
          <b> EHS Info Tech Solutions </b>
          <p>
            <b>Software Engineer</b>
          </p>
          <p>
            2019- 2022 , {"  "}
            <LocationOnIcon className="me-2"></LocationOnIcon>
            Hyderabad,Telangana{" "}
          </p>
          <p>
            <b># Tailor man </b>
          </p>
          <p>
            {" "}
            <b>Technologies: </b>React JS, Redux, Bootstrap, Jest{" "}
          </p>
          <p>
            {" "}
            <b> Description: </b> It’s both web and mobile application. This
            application is built with the purpose of providing easy and better
            shopping services to customers. This is web-based hybrid responsive
            application it supports all devices to engage customers for online
            shopping.
          </p>
        </p>
      </Paper>
    </>
  );
}
