import { useState, useEffect } from "react";
import { useData } from "../Hooks/useData";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

  const DemoPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
  }));

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);

  const data = useData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
  );

  const rate = data ? data.bitcoin[currency.toLowerCase()] : "not found";

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div>
            <Stack direction="column" spacing={0} alignItems="center">
      <DemoPaper square={false}>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
  
      <div>
         <br />
        <strong>Rate: </strong>
        {rate}
      </div>
    </Box>
    </DemoPaper>
    </Stack>
</div>
  );
}

export default BitcoinRates;
