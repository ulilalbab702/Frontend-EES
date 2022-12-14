import React from "react";
import { question } from "../../dummydata";
import "./questionpage.css";


const questionpage = () => {
  return (
    <div className="questionPage">
      <p>Question Page</p>
      <div>
        <div className="quest">
          {question.map((val) => (
            <>
              <div className="text">
                <p className="number">{val.id}</p>
                <p>{val.question}</p>
              </div>
              <div className="option">
                <div className="stronglyDisagree">
                  <input type="radio" id="specifyColor"/>
                  <label>{val.option1}</label>
                </div>
                <div className="Disagree">
                  <input type="radio" id="specifyColor" />
                  <label>{val.option2}</label>
                </div>
                <div className="Neither">
                  <input type="radio" id="specifyColor" />
                  <label>{val.option3}</label>
                </div>
                <div className="Agree">
                  <input type="radio" id="specifyColor" />
                  <label>{val.option4}</label>
                </div>
                <div className="stronglyAgree">
                  <input type="radio" id="specifyColor" />
                  <label>{val.option5}</label>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="gapBtn">
        <button className="button" onClick={() => (window.location.href = "/Form")}>Back</button>
        <button className="button" onClick={() => (window.location.href = "/questionpage2")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default questionpage;
