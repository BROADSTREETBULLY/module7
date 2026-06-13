import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

  const DemoPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
  }));

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");


  return (
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
              LOGIN{" "}
            </Typography>
            <div className="formRow">
              <label>
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  value={userEmail}
                  name="userEmail"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="formRow">
              <label>
                <TextField
                  required
                  id="outlined-required"
                  label="Password"
                  value={userPassword}
                  name="password"
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </label>
            </div>
            <button>Login</button>
          </div>
        </Box>
      </DemoPaper>
    </Stack>
  );
}

export default LoginForm;
