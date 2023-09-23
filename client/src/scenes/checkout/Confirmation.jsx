import { Box, Alert, AlertTitle } from "@mui/material";

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="Sucess">
        <AlertTitle>Sucess</AlertTitle>
        You have sucessfully made an Order -{" "}
        <strong> Congrats on making your purchase</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;
