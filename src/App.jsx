// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/home/Home";
import Work from "./components/work/Work";
import Services from "./components/services/services";
import Resume from "./components/page/Page";
import Contact from "./components/contact/Contact";

const App = () => (
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
