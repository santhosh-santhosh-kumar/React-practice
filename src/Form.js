import React from 'react'
import {useFormik } from "formik";
import axios from "axios";
import { Link } from 'react-router-dom';

function Form() {
    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          password: "",
        },
        validate:(values)=>{
          const error={}
          return error
    
        },
        onSubmit:async (values)=>{
          try{
            const res=await axios.post('http://localhost:3000/user',values)
            console.log(res)
            alert("hello")
          }catch(err){
            console.log(err)
          }
    
        }
          
        
      });
    
  return (
    <>
        <form onSubmit={formik.handleSubmit}>
      <div class="form-group">
        <label for="exampleInputEmail1">firstname</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">lastname</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">mobile</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={formik.handleChange}
          name="mobile"
          value={formik.values.mobile}
        />
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
    <div>
        <Link to={'/details'}>Details</Link>
    </div>
    </>
  )
}

export default Form