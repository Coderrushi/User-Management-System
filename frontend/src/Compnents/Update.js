import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Update() {
  const navigate = useNavigate();
  const[id, setID] = useState(' ');
  const[name, setName] = useState(' ');
  const[username, setUsername] = useState(' ');
  const[age, setAge] = useState(' ');

useEffect (()=>{
  localStorage.getItem("ID");
  setID(localStorage.getItem("ID"));
  setName(localStorage.getItem("NAME"));
  setUsername(localStorage.getItem("USERNAME"));
  setAge(localStorage.getItem("AGE"));
},[])

const handleUpdate=(e)=>{
  e.preventDefault();
  //console.log("Working");
  axios.put("http://localhost:8086/user/update/"+id, {
    username : username,
    age : age
  }).then((response)=>{
    console.log(response.data);
    alert("User information updated successfully!");
    navigate("/home");
  }).catch((error)=>{
    console.log(error);
  })
}
  return (
    <>
      <div className="container">
        <br />
        <h1>Update User</h1>
        <br />
        <div className="row mb-4">
          <div className="col-lg-4 border">
            <form className="mt-2 mb-2" onSubmit={handleUpdate}>
            <div class="mb-3">
                <label class="form-label">Id</label>
                <input type="text" class="form-control" value={id}/>
              </div>
              <div class="mb-3">
                <label class="form-label">Enter Name</label>
                <input type="text" class="form-control" value={name}/>
              </div>
              <div class="mb-3">
                <label class="form-label">Enter User Name</label>
                <input type="text" class="form-control" value={username} onChange={(e)=>{
                  setUsername(e.target.value);
                }}/>
              </div>
              <div class="mb-3">
                <label class="form-label">Enter Age</label>
                <input type="text" class="form-control" value={age} onChange={(e)=>{
                  setAge(e.target.value);
                }}/>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
