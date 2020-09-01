import React from 'react';
import web from "../src/images/img-people-3.png"
import { NavLink } from 'react-router-dom';
import Common from "./Common"

const About = () => {
  return (
    <>
      <Common
      name="Grow your business with"
      content="To advance technology through continuous learning and empathy so that organizations globally can deliver greater value and build a better future for humanity."
      para="TechnoIdentity is a software development company driven by passion and purpose. We combine our expert understanding of technology with disruptive innovation to deliver intelligent software solutions for our clients. The speed and adaptability of our learning enable us to harness the latest technologies that complement your business’s strategic goals and enhance profitability."
      imgsrc={web}
      visit="/contact"
      btname="Contact Us"
      />
    </>
  );
};
export default About;