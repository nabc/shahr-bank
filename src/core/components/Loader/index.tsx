// const useStyles = makeStyles(() => ({
//   box: {
//     width: "100%",
//   },
// }));

import { Box, CircularProgress, Grid, LinearProgress } from "@mui/material";

type LoaderProps = {
  loaderType: "circular" | "linear";
};

export default function Loader({ loaderType }: LoaderProps) {
  return (
    <Box>
      {loaderType === "circular" ? (
        <Grid container justifyContent="center">
          <Grid item>
            <CircularProgress color="secondary" />
          </Grid>
        </Grid>
      ) : (
        <LinearProgress color="secondary" />
      )}
    </Box>
  );
}
