import axios from "axios";
import React, { useState, useEffect } from "react";

const Trial = () => {
  const [data, setData] = useState([]);

  const getData =  () => {
    const url = "https://mocki.io/v1/ce04c4b5-7b1d-4645-8d98-f898b065519e";

    axios.get(url).then((response) => {
     console.log(response.data)
      setData(response.data);

  
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div><h5>UserList</h5>
    <table className="table table-primary">
  <thead>
    <tr >
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">mobile</th>
      <th scope="col">Education</th>
      <th scope="col">Designation</th>
      <th scope="col">Hobbies</th>
      <th scope="col">Actions</th>
      
      
    </tr>
  </thead>

  <tbody>
    {
        data.filter((element)=>element.address.zipcode === "31").map((user,index)=>{
            return (
                <tr key={index}>
                <th scope="row">{(user.id)}</th>
                <td>{`${user.name} `}</td>
                <td>{user.email}</td>
                <td>{user.address.zipcode}</td>
            
                <td> 
                  <button type='button' className='btn btn-primary pe-3 ps-3'>Edit</button>
                  <button type='button' className='btn btn-danger ms-2' >Delete</button>
                </td>
              
                </tr>
             

            )
        })
    }
  
  </tbody>
</table>
    
    
    
    </div>
  );
};

export default Trial;
