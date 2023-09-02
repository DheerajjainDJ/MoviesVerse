import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        label: {
          color: "#fff",
          fontSize: "0.8rem",
          fontWeight: "bold",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#FFDE00",
          fontWeight: "bold",
          fontSize: "0.8rem",
          border: "1px solid #FFDE00",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: "2px solid #FFDE00",
          borderRadius: "5px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#fff",
          fontSize: "1.3rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "6px 10px",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "1rem",
        },
      },
    },
  },
});
