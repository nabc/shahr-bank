import { Box, Grid } from "@mui/material";

export default function Header() {
  return (
    <header>
      <Box p={4}>
        <Grid container>
          <Grid item>{/* <img alt="snapp logo" src="/snappTextLogo.svg" /> */}</Grid>
        </Grid>
      </Box>
    </header>
  );
}
