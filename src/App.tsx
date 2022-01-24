import { lazy, Suspense } from "react";
import { Routes, BrowserRouter, Navigate, Route } from "react-router-dom";
import RouterWrapper from "src/components/RouterWrapper";
import Loader from "src/components/Loader";
import UtilityProvider from "src/components/UtilityProvider";
import { AppProvider } from "src/AppContext";
import GetData from "src/GetData";

const Reports = lazy(() => import("./pages/Reports"));

function App() {
  return (
    <AppProvider>
      <GetData />
      <UtilityProvider locale="fa" isDirectionRTL>
        <RouterWrapper>
          <Suspense fallback={<Loader loaderType="circular" />}>
            <Reports />
          </Suspense>
        </RouterWrapper>
      </UtilityProvider>
    </AppProvider>
  );
}

export default App;
