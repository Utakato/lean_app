import { createTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const appTheme: Theme = createTheme({
  // Palette

  palette: {
    primary: {
      main: "#80ED99",
      contrastText: "#000000",
    },
    secondary: {
      main: "#67C29B",
    },
    error: {
      main: "#C62D2D",
    },
    warning: {
      main: "#FBBA25",
    },
    success: {
      main: "#2DC653",
    },
    text: {
      primary: "#001204",
      secondary: "#A6ADAA",
    },
    background: {
      paper: "#F8F8F8",
    },
    common: {
      black: "#001204",
      white: "#FAFFFB",
    },
  },

  // Typography
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
    h1: {
      fontSize: "40px",
      fontFamily: `"Montserrat", sans-serif`,
    },
    h2: {
      fontSize: "32px",
      fontFamily: `"Montserrat", sans-serif`,
    },
    h3: {
      fontSize: "24px",
      fontFamily: `"Montserrat", sans-serif`,
    },
    h4: {
      fontSize: "20px",
      fontFamily: `"Montserrat", sans-serif`,
    },
    h5: {
      fontSize: "16px",
      fontFamily: `"Montserrat", sans-serif`,
    },
    h6: {
      fontSize: "12px",
      fontFamily: `"Montserrat", sans-serif`,
    },
    body1: {
      fontSize: "16px",
      fontFamily: `"Open Sans", sans-serif`,
    },
    body2: {
      fontSize: "12px",
      fontFamily: `"Open Sans", sans-serif`,
    },
  },
});

appTheme.components = {
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        border: "none",
      },
      root: {
        height: "56px",
        borderRadius: "50px",
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
        padding: "24px",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "50px",
        textTransform: "capitalize",
      },
      contained: {
        color: appTheme.palette.common.white,
        backgroundColor: `${appTheme.palette.primary.main} !important`,
      },
    },
  },
};
