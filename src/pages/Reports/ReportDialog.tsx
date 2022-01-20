import * as React from "react";
import { get } from "lodash";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Stack from "@mui/material/Stack";
import { fromAppActions, useApp } from "src/AppContext";
import CounterChart from "src/components/Charts/CounterChart";
import RefererChart from "src/components/Charts/RefererChart";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Item from "src/pages/Reports/StackItem";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ReportDialog() {
  const {
    state: { counterList, selectedCounterCode, dialogOpen },
    dispatch,
  } = useApp();

  const counterName = get(
    counterList.find((counter) => counter.counterCode === selectedCounterCode),
    "counterName",
    ""
  );

  const handleClose = () => {
    dispatch(fromAppActions.closeDialog());
  };

  return (
    <Dialog
      open={dialogOpen}
      maxWidth="lg"
      fullWidth
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography>گزارش کیوسک {counterName}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Item>
            عملکرد کلی کیوسک
            <CounterChart />
          </Item>

          <Item>
            صدور به تفکیک راهبر‌
            <RefererChart />
          </Item>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
