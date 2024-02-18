import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function SimplePaper() {
  const data = [
    "React JS",
    "Javascript",
    "Next JS",
    "Express JS",
    "REDUX",
    "Node JS",
    "HTML",
    "CSS",
    "JEST",
    "SVN",
    "Git Hub",
    "Bootstrap",
    "MUI",
    "Tailwind CSS",
    "Ant Design",
    "Mongo DB",
    "Oracel DB",
    "VS Code",
    "Eclipse",
    "PostMan",
    "Chart JS",
  ];
  const langauage = ["English", "Hindi", "Telugu"];
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <Paper elevation={16}>
        <Card sx={{ width: "100%" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Technologies and Skills
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div className="row g-3  ps-5">
                  {data.map((value, index) => {
                    return (
                      <div className="col-4 text-start" key={index}>
                        <b>.{value}</b>
                      </div>
                    );
                  })}
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
      <Paper elevation={16}>
        <Card sx={{ width: "100%" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Languages
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div className="row g-3  ps-5">
                  {langauage.map((value, index) => {
                    return (
                      <div className="col-12 text-start" key={index}>
                        <b>.{value}</b>
                      </div>
                    );
                  })}
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Box>
  );
}
