import React, { useState } from "react";
// import panth from "../../img/pngwing 1.svg"

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="form" >
      {/* <img src={panth} /> */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button className="btn" onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  );
};

export { Form };
