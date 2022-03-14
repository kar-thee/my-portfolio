import React from "react";
import "./App.css";
const App = () => {
  return (
    <div className="mx-auto">
      <div className="msgBoard">
        <h2> I am KARTHEEKEYAN</h2>
      </div>

      <div className="msgBoard">
        <h3> Sorry for the inconvenience.... Site under Development</h3>
      </div>
      <div className="msgBoard">
        <h3>Will go live in a couple of days...</h3>
      </div>
      <div className="msgBoard">
        <h3> Please visit my Github Account to check my Projects</h3>
        <h3>
          {" "}
          <a href="https://github.com/kar-thee">Click here</a>
        </h3>
      </div>
      <div className="msgBoard">
        <h4 className="greenColor"> Thank You</h4>
      </div>
    </div>
  );
};

export default App;
