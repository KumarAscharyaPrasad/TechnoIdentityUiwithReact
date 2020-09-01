import React, { useState } from 'react';
import swal from 'sweetalert';

const Contact = () => {
  const [data,setData]=useState({
    email:"",
    fullName:"",
    contactNumber:"",
    description:""
  })
  const InputEvent=(event)=>{
    const {name,value}=event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      }
    })
  }
  const formSubmit=(e)=>{
    e.preventDefault();
    const message = ` Hi , ${data.fullName}. We will notify you on ${data.contactNumber} or ${data.email}. Thank You for visiting our website .`;
    swal("Good job!", message, "success");
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto p-2">
            <form onSubmit={formSubmit}>
              <div className="form-group p-2">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent}  placeholder="name@example.com" />
              </div>
              <div className="form-group p-2">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="text" className="form-control" name="fullName" value={data.fullName} onChange={InputEvent}  placeholder="Enter Your FullName" />
              </div>
              <div className="form-group p-2">
                <label for="exampleFormControlInput1">Contact Number</label>
                <input type="number" className="form-control" name="contactNumber" value={data.contactNumber} onChange={InputEvent}  placeholder="+91" />
              </div>
              <div className="form-group p-2">
                <label for="exampleFormControlTextarea1">Add Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description" value={data.description} onChange={InputEvent}></textarea>
              </div>
              <div className="mt-3 p-2">
                <button type="submit" className="btn btn-primary btn-sm ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;