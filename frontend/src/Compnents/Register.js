import React, {useRef} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const navigate = useNavigate();  //to navigate from register page to home page
  const name = useRef();
  const username = useRef();
  const age = useRef();

  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:8086/user/add",{
        name: name.current.value,
        username: username.current.value,
        age: age.current.value
      }).then((res)=>{
        console.log(res.data);
        alert("User added successfully!");
        navigate("/home");
      }).catch((err)=>{
        console.log(err);
      });
      // console.log(name.current.value);
      // console.log(username.current.value);
      // console.log(age.current.value)
  }
  return (
    <>
        <div className='container'>
        <br />
        <h1>Register User</h1>
        <br />
        <div className="row mb-4">
          <div className="col-lg-4 border">
            <form className="mt-2 mb-2">
              <div class="mb-3">
                <label class="form-label">Enter Name</label>
                <input type="text" class="form-control" ref={name}/>
              </div>
              <div class="mb-3">
                <label class="form-label">Enter User Name</label>
                <input type="text" class="form-control" ref={username}/>
              </div>
              <div class="mb-3">
                <label class="form-label">Enter Age</label>
                <input type="text" class="form-control" ref={age}/>
              </div>
              <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
        </div>
    </>
  )
}
