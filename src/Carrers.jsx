import React from 'react';
import web from "../src/images/img-people.png"
import { NavLink } from 'react-router-dom';
import Common from "./Common"

const Carrers = () => {
  return (
    <>
      <Common
      name="Let'grow with "
      content="Technology , For the people-by the people"
      para="At TechnoIdentity, people are at the heart of everything we do. Our solutions are devised to add more value to industries and processes that affect real people. Our working methodology channels our team members’ diverse backgrounds, thought processes and strategic approaches to deliver fresh solutions that cut across existing traditions and conventions."
      imgsrc={web}
      visit="/contact"
      btname="Get Hired"
      />
    </>
  );
};
export default Carrers;