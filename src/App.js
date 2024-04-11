import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Pages1 = lazy(() => import("./pages/Pages1"));
const Pages2 = lazy(() => import("./pages/Pages2"));
const Login1 = lazy(() => import("./pages/Login1"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages1" element={<Pages1 />} />
          <Route path="/pages2" element={<Pages2 />} />
          <Route path="/login1" element={<Login1 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
