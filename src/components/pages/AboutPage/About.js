import React from "react";
import { AboutObjOne, AboutObjTwo } from "./data";
import Profile from "../../Profile/Profile.js";
import { InfoSection } from "../../InfoSection/InfoSection.js";

// import {Profile} from '../../components';
function About() {
  return (
    <>
      <InfoSection {...AboutObjOne} />
      <InfoSection {...AboutObjTwo} />
      <Profile />
    </>
  );
}
export default About;
