import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

  const DemoPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
  }));

function HomePage() {

  const navigate = useNavigate();
  return (
  <>
      <Stack direction="column" spacing={0} alignItems="center">
      <DemoPaper square={false}>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <div className="LoginForm componentBox">
            <Typography variant="h2" sx={{ color: "#1e88e5" }}>
              {" "}
              This is a home page{" "}
            </Typography>
            <Button sx={{ my: 4, display: "block" }}
            onClick={() => navigate ("/login")}>Log in here</Button>
          </div>
        </Box>
      </DemoPaper>
    </Stack>
  </>);
}

export default HomePage;
