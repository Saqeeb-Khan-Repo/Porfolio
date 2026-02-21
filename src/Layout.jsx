// Layout.jsx
import Header from "./components/navigation/Header";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/page/PageTransition";
import StairTransition from "./components/page/StairTransition";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />

      {/* stairs overlay */}
      <StairTransition />

      <main className="min-h-[calc(100vh-120px)]">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
