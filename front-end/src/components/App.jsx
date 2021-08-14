import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MosPage from "../pages/MosPage";
import FormPage from "../pages/FormPage";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// Nav Logo
import LogoWithBackground from "../images/logo_with_yellow_background.svg";

import FacebookYellow from "../images/facebook_yellow.svg";
import InstagramYellow from "../images/instagram_yellow.svg";
import LinkedinYellow from "../images/linkedin_yellow.svg";

// Images for Footer
import FacebookBlack from "../images/facebook_black.svg";
import InstagramBlack from "../images/instagram_black.svg";
import LinkedinBlack from "../images/linkedin_black.svg";


export default function App() {
  return (
    <div>
    <Router>
    <Nav
    headerClass="background-yellow"
    facebookIcon={FacebookBlack}
    instagramIcon={InstagramBlack}
    linkedinIcon={LinkedinBlack}
    navClass="background-black"
    logo={LogoWithBackground}
    btnClass="sm-btn yellow-btn"
    btnText="Get Started"
    btnSrc="/form"
    barsClass="yellow"
  />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/About" component={AboutPage} />
        <Route path="/MOS" component={MosPage} />
        <Route path="/Form" component={FormPage} />
      </Switch>

      <Footer
        footerClass="yellow-footer"
        facebookIcon={FacebookBlack}
        instagramIcon={InstagramBlack}
        linkedinIcon={LinkedinBlack}
      />
    </Router>


    </div>
  );
}
