import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/home.page";
import AboutUsPage from "../pages/aboutus.page";
import ContactUsPage from "../pages/contactus.page";
import { MenuLayout } from "../layouts/menu.layout";
import { AnimatePresence } from "framer-motion";
import AnimatedLayout from "../layouts/animated.layout";

const PageTransition = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<MenuLayout />}>
          <Route index element={<AnimatedLayout><HomePage /></AnimatedLayout>} />
          <Route path="/about-us" element={<AnimatedLayout><AboutUsPage /></AnimatedLayout>} />
          <Route path="/contact-us" element={<AnimatedLayout><ContactUsPage /></AnimatedLayout>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default PageTransition;
