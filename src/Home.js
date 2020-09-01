import React from 'react';
import web from "../src/images/img-people-2.png"
import { NavLink } from 'react-router-dom';
import Common from "./Common"

const Home = () => {
  return (
    <>
      <Common
        name="Welcome to"
        content="We are  Spark team of TechnoIdentity & Developing Web is our Identity ! ! ! "
        para=" A world closer to social justice, especially in the direction of greater education and healthcare for all through technology innovation. To advance technology through continuous learning and empathy so that organisations globally can deliver greater value and build a better future for humanity."
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};
export default Home;