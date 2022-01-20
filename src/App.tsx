import { lazy, Suspense } from "react";
import { Routes, BrowserRouter, Navigate, Route } from "react-router-dom";
import RouterWrapper from "src/components/RouterWrapper";
import Loader from "src/components/Loader";
import UtilityProvider from "src/components/UtilityProvider";
import { AppProvider } from "src/AppContext";

const Reports = lazy(() => import("./pages/Reports"));

function App() {
  return (
    <AppProvider>
      <UtilityProvider locale="fa" isDirectionRTL>
        <RouterWrapper>
          <BrowserRouter>
            <Suspense fallback={<Loader loaderType="circular" />}>
              <Routes>
                <Route path="/" element={<Navigate replace to="/reports" />} />
                <Route path="reports" element={<Reports />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </RouterWrapper>
      </UtilityProvider>
    </AppProvider>
  );
}

export default App;
