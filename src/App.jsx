import { HashRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./Layout";
import { Analytics } from "@vercel/analytics/react";

const Home = lazy(() => import("./components/home/Home"));
const Work = lazy(() => import("./components/work/Work"));
const Services = lazy(() => import("./components/services/Services"));
const Resume = lazy(() => import("./components/page/Page"));
const Contact = lazy(() => import("./components/contact/Contact"));
const ErrorPage = lazy(() => import("./ErrorPage"));

const App = () => (
  <HashRouter>
    <Analytics />
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
          <span className="text-sm tracking-[0.2em] uppercase text-slate-500">
            Loading...
          </span>
        </div>
      }
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  </HashRouter>
);

export default App;
