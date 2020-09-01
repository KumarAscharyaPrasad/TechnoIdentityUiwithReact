import React from 'react';
import web from "../src/images/img-people-3.png"
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="  col-10 mx-auto">
                            <div className="row">
                                <div className=" jumbotron col-md-6 pt-5 pt-lg-0 order2 order-lg-1 ">
                                    <h1 className="display-6 py-4 "> {props.name}<strong className="brand-name">TechnoIdentity</strong></h1>
                                    <h2 className="lead">{props.content} </h2>
                                    <p>{props.para}</p>
                                    <div className="mt3 py-4">
                                        <NavLink to={props.visit} className="btn btn-get-started btn-sm " >{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 orderlg-2 header-image">
                                    <img src={props.imgsrc} className="img-fluid animated p-2 " alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Common;