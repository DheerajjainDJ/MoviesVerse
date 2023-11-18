import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./utils/ErrorBoundary";
import { ThemeProvider, CircularProgress } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./comps/Header/Header";
import { theme } from "./utils/customizedTheme";
import Shimmer from "./comps/ShimmerUI/Shimmer";
import useOnline from "./utils/useOnline";
import DetailInfoShimmer from "./comps/ShimmerUI/DetailInfoShimmer";
const Trending = lazy(() => import("./pages/Trending/Trending"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const TV = lazy(() => import("./pages/TV/TV"));
const Search = lazy(() => import("./pages/Search/Search"));
const DetailInfo = lazy(() => import("./comps/DetailInfo/DetailInfo"));
const NoPage = lazy(() => import("./pages/noMatchRoute/404Page"));

function App() {
  const onlineStatus = useOnline();

  if (!onlineStatus) {
    return <h3 style={{ color: "#fff" }}>"oops! you are offline"</h3>;
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route element={<Header />}>
              <Route path="/">
                <Route
                  index
                  element={
                    <Suspense fallback={<Shimmer />}>
                      <Trending />
                    </Suspense>
                  }
                />
                <Route
                  path=":page"
                  element={
                    <Suspense fallback={<Shimmer />}>
                      <Trending />
                    </Suspense>
                  }
                />
              </Route>
              <Route path="/movies">
                <Route
                  index
                  element={
                    <Suspense fallback={<Shimmer />}>
                      <Movies />
                    </Suspense>
                  }
                />
                <Route
                  path=":page"
                  element={
                    <Suspense fallback={<Shimmer />}>
                      <Movies />
                    </Suspense>
                  }
                />
              </Route>
              <Route path="/tv">
                <Route
                  index
                  element={
                    <Suspense fallback={<Shimmer />}>
                      <TV />
                    </Suspense>
                  }
                />
                <Route
                  path=":page"
                  element={
                    <Suspense fallback={<Shimmer />}>
                      <TV />
                    </Suspense>
                  }
                />
              </Route>
              <Route
                exact
                path="search"
                element={
                  <Suspense fallback={<CircularProgress />}>
                    <Search />
                  </Suspense>
                }
              />
              <Route
                exact
                path="info/:type/:id"
                element={
                  <Suspense fallback={<DetailInfoShimmer />}>
                    <DetailInfo />
                  </Suspense>
                }
              />
              <Route
                exact
                path="*"
                element={
                  <Suspense fallback={<CircularProgress />}>
                    <NoPage />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
