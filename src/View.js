import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function View() {
  const [value, setValue] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users/");
        setValue(res.data);
      } catch (error) {
        alert("Register error");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {value.map((item) => {
        if (item._id == id) {
          return (
            <>
              <ul>
                <li>{item.id}</li>
                <li>{item.firstName}</li>
                <li>{item.lastName}</li>
                <li>{item.email}</li>
                <li>{item.mobile}</li>
                <li>{item.password}</li>
              </ul>
            </>
          );
        }
      })}
    </>
  );
}

export default View;
