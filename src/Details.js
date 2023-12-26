import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Details() {
  const [value, setValue] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      console.log(res.data)
      setValue(res.data);
    } catch (error) {
      alert("Register error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete=async (id)=>{
    try{
        const res=await axios.delete(`http://localhost:3000/user/${id}`)
        fetchData();

    }catch(err){

    }

  }
  return (
    <>
      {value.map((item) => {
        return (
          <>
            <div class="card" style={{width: "18rem;"}}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p>firstName:{item.firstName}</p>
                <p>lastName:{item.lastName}</p>
                <p>Emai:{item.email}</p>
                <p>mobile:{item.mobile}</p>
                <p>password:{item.password}</p>
                <p>Id:{item.id}</p>
                <Link to={`/view/${item._id}`}><span>view</span></Link>
                <Link to={`/edit/${item._id}`}><span>Edit</span></Link>
                <span onClick={()=>handleDelete(item._id)}>delete</span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
export default Details;
