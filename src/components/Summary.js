import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Summary() {
  const textdata = `Almost 4+ years of working experience in developing projects
  which include ReactJS Knowledge in developing single-page
  applications (SPAs). JS Good knowledge of JavaScript concepts.
  CSS Good experience with CSS3 and SASS. Responsive Hands-on
  experience in developing responsive websites. Experience in
  creating APIs, Routes, and events. Can create and handle JSON,
  regarding fetching data. Knowledge of using tools like Postman.
  Ability to grasp latest technologies and to properly apply new
  tools to build applications. Ability to communicate requirements
  effectively to team members and manage applications`;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 5,
            p: 2,
          },
        }}
      >
        <Paper elevation={16}>
          <h3>SUMMARY</h3>
          <p>{textdata}</p>
        </Paper>
      </Box>
    </>
  );
}
