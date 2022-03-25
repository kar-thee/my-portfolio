import { Divider } from "@mui/material";
import React, { useState } from "react";
import AboutMe from "./about/AboutMe";
import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import HomePage from "./components/home/HomePage";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import DrawerComponent from "./util/DrawerComponent";
import SnackbarFeedback from "./util/SnackbarFeedback";

const App = () => {
  const [isOpenFeedBack, setIsOpenFeedBack] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // drawer Functions
  const openDrawerFunc = () => {
    setDrawerOpen(true);
  };
  const closeDrawerFunc = () => {
    setDrawerOpen(false);
  };

  // feedback snackbar functions
  const handleChangeFeedback = () => {
    setIsOpenFeedBack((prev) => !prev);
  };
  const handleCloseFeedback = () => {
    setIsOpenFeedBack((prev) => !prev);
  };

  return (
    <>
      <div id="home" style={{ height: "100vh" }}>
        <HomePage />
      </div>

      <Navbar openDrawerFunc={openDrawerFunc} />

      <div id="projects">
        <Projects />
      </div>

      <div id="about">
        <AboutMe />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="contact">
        <Contact handleChangeFeedback={handleChangeFeedback} />
      </div>

      <Divider sx={{ color: "#996600" }} />

      <Footer />

      <DrawerComponent
        drawerOpen={drawerOpen}
        closeDrawerFunc={closeDrawerFunc}
      />

      <SnackbarFeedback
        isOpen={isOpenFeedBack}
        handleCloseFeedback={handleCloseFeedback}
      />
    </>
  );
};

export default App;
