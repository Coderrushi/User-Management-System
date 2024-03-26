import axios from 'axios';
import React, {useEffect, useState} from 'react';

export default function Delete(){
    const [users, setUsers] = useState([]);
    
    
    const [userId, setUserId] = useState('');
      const handleDelete = (userId) => {
        axios.delete(`http://localhost:8086/user/deleteuser/${userId}`)
            .then(response => {
                console.log(response.data);
                alert("User deleted successfully!");
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
            });
};


        users.map((user) => {
      return(
        <>
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.age}</td>
            <td>
                <button className='btn btn-danger' onClick={()=>handleDelete(user.id)}>Delete</button>
            </td>
            <td></td>
        </tr>
        </>
      )
    }) 
}
