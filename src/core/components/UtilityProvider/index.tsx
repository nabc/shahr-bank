import React, { PropsWithChildren, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import {
  StyledEngineProvider,
  Theme,
  ThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createCustomTheme } from "./themes";
import "@mui/styles";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

type UtilityProviderProps = {
  isDirectionRTL: boolean;
  locale: "fa" | "en";
  messages?: AppMessagesModel;
};

type AppMessagesModel = {
  en: Record<string, string>;
  fa: Record<string, string>;
};

const queryClient = new QueryClient({});

function UtilityProvider({
  children,
  isDirectionRTL,
}: PropsWithChildren<UtilityProviderProps>) {
  const currentTheme: any = createCustomTheme({
    direction: isDirectionRTL ? "rtl" : "ltr",
    theme: "UNICORN",
  });

  useEffect(() => {
    document.dir = "rtl";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={currentTheme}>
          <CacheProvider value={cacheRtl}>
            <CssBaseline />
            {children}
          </CacheProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}

export default UtilityProvider;
