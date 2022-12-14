import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./LandingPage.css";
import logo from "../../assets/ykbut.png"
import { useState } from "react"

const LandingPage = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    if (data !== []) {
      fetch("http://localhost:8069/api/partner/get/?session_code=4058")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data);
      });
    }
  }, [])
  console.log("cekdata", data)
  return (
    <div className="landingpage">
      <div className="mainContainer">
        <img src={logo} alt="" />
        <div className="title" style={{ margin: '3rem 0 2rem 0' }}>Welcome to EES</div>

        <button onClick={() => (window.location.href = "/Form")} className="btn" >
          Start Survey
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
