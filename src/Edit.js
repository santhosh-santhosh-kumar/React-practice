import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Edit() {
  const [value, setValue] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/" + id);
        setValue(res.data);
        formik.setValues(res.data);
      } catch (error) {
        alert("Register error");
      }
    };
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validate: (values) => {
      const error = {};
      return error;
    },
    onSubmit: async (values) => {
      try {
        const res = await axios.put("http://localhost:3000/user/"+id,values);
        alert("hello");
      } catch (err) {
        console.log(err);
      }
    },
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
            onChange={formik.handleChange}
            value={formik.values.firstName}
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
            onChange={formik.handleChange}
            value={formik.values.lastName}
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
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">mobile</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="mobile"
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
        <Link to={"/details"}>Details</Link>
      </div>
    </>
  );
}

export default Edit;
