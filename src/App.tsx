import { lazy, Suspense } from "react";
import { Routes, BrowserRouter, Navigate, Route } from "react-router-dom";
import RouterWrapper from "src/core/components/RouterWrapper";
import Loader from "src/core/components/Loader";
import UtilityProvider from "src/core/components/UtilityProvider";

const Reports = lazy(() => import("./pages/Reports.tsx"));

function App() {
  return (
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
  );
}

export default App;
