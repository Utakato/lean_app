import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "../core/theme/theme";
import { Provider } from "react-redux";
import { store } from "../core/redux/store";
import { AuthWrapper } from "../features";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <AuthWrapper>
          <Component {...pageProps} />
        </AuthWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
