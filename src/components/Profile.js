import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import image from "./../assets/IMG_20231210_112110759_HDR.jpg";

export default function Summary() {
  return (
    <>
      <Paper elevation={16} sx={{ p: 2 }}>
        <div className="row">
          <div className="col-6 p-5">
            <h3>Profile</h3>
            <hr></hr>
            <p>
              <b>Full Name :{"  "} Choppari Madhu</b>
            </p>
            <p>
              <b> DOB :{"  "} 06/03/1991</b>
            </p>
            <p>
              <b>
                Current location:{"  "} Hyderabad,{"  "}Telangana
              </b>
            </p>
            <p>
              <b>Born place:{"  "} Mancherial,Telangana</b>
            </p>
            <p>
              <b>
                Languages: Telugu,{"  "}English,{"  "}Hindi
              </b>
            </p>
            <p>
              <b>Email ID: {"  "}madhuch155@gmail.com</b>
            </p>
            <p>
              <b>Mobile No: {"  "}8501056461</b>
            </p>
          </div>
          <div className="col-6">
            <img
              src={image}
              alt="no image"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
        </div>
      </Paper>
    </>
  );
}
