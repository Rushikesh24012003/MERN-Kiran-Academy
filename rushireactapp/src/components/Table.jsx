import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Table() {

    const [employees,setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/getDetails')
        .then((res) => res.json())
        .then((data) => setEmployees(data))
        .catch((err) => console.log("error fetching employees : "))
    } , [])

  return (
   <>
        <div style={{padding:"20px"}}>
            <h2>Employee list : </h2>
            <table  cellPadding={8} style={{border:"1px solid black" , borderCollapse:"collapse", width:"100%"}}>
                <thead>
                    <tr style={{backgroundColor:"gray"}}>
                     <th>First name</th>
                    <th>Middle name</th>
                    <th>Last name</th>
                    <th>Age</th>
                    <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                   
                   {
                    employees.length > 0 ? (
                        employees.map((emp) =>(
                            <>
                            <tr >
                                <td>{emp.fname}</td>
                                <td>{emp.mname}</td>
                                <td>{emp.lname}</td>
                                <td>{emp.age}</td>
                                <td>{emp.mobile}</td>
                            </tr>
                            </>
                        ))
                    ) : (
                        <tr>
                            <td>data not found</td>
                        </tr>
                    )
                   }
                        
                </tbody>
            </table>
        </div>
   </>
  )
}

export default Table
