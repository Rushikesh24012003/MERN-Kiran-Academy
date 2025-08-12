import React, { useState } from 'react'
import axios from "axios";

function Form() {

    const [fname , setFname] = useState("");
    const [mname , setMname] = useState("");
    const [lname , setLname] = useState("");
    const [age , setAge] = useState("");
    const [mobile , setMobile] = useState("");

    const sendData = async (e) =>{

      try {

        if(!fname || !mname || !lname || !age || !mobile){
          alert("Please enter all fields...")
          return;
        }

        const { SendData } = await axios.post(
          "http://localhost:8000/addDetails",
          {
            fname,
            mname,
            lname,
            age,
            mobile
          },
          {
            withCredentials : "true",
            headers : {"Content-Type" : "application/json" },
          }
        ); 

        alert("Data saved successfully!!");
        
        setFname("");
        setMname("");
        setLname("");
        setAge("");
        setMobile("");
        
        
      } catch (error) {
       
        alert("error")
      }
    }


  return (
    <>
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f2f2f2"
      }}
    >
      <form
        onSubmit={sendData}
        style={{
          background: "#fff",
          padding: "20px 30px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          width: "300px"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333" }}>Contact Us</h2>

        <label style={{ display: "block", marginTop: "10px", color: "#555" }}>
          First Name:
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={fname}
          onChange={(e)=> setFname(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "4px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        />

        <label style={{ display: "block", marginTop: "10px", color: "#555" }}>
          Middle Name:
        </label>
        <input
          type="text"
          name="middleName"
          placeholder="Enter middle name"
          value={mname}
          onChange={(e)=> setMname(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "4px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        />

        <label style={{ display: "block", marginTop: "10px", color: "#555" }}>
          Last Name:
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          value={lname}
          onChange={(e)=> setLname(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "4px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        />

        <label style={{ display: "block", marginTop: "10px", color: "#555" }}>
          Age:
        </label>
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={age}
          onChange={(e)=> setAge(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "4px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        />

        <label style={{ display: "block", marginTop: "10px", color: "#555" }}>
          Mobile Number:
        </label>
        <input
          type="tel"
          name="mobile"
          placeholder="10-digit mobile number"
          value={mobile}
          onChange={(e)=> setMobile(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "4px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default Form
