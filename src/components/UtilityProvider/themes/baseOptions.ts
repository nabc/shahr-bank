import typography from "./typography";

const baseOptions = {
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontFamily: '"Vazir", "Roboto", "Helvetica", "Arial", "sans-serif"',
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          height: "100%",
          width: "100%",
        },
        body: {
          fontFamily: '"Vazir", "Roboto", "Helvetica", "Arial", "sans-serif"',
          height: "100%",
          width: "100%",
        },
        "#root": {
          height: "100%",
          width: "100%",
        },
        ".MuiTablePagination-spacer": {
          display: "none",
        },
        ".MuiButton-root": {
          minWidth: "unset",
        },
        ".MuiFormControlLabel-root": {
          margin: 0,
        },
        ".MuiButton-contained.Mui-disabled": {
          backgroundColor: "transparent",
        },
        ".MuiFormControlLabel-label": {
          fontSize: 11,
        },
      },
    },
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)",
      },
    },
  },
};

export default baseOptions;
