import { useState } from "react";
import HOME from "./details/home";

function Login({ acounts }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showHome, setShowHome] = useState(false);

  function checkInputs() {
    if (!email || !password) return alert("please fill in all the inputs");
    acounts.map(
      (el) =>
        email === el.email && password === el.password && setShowHome(true)
    );
  }
  return (
    <>
      {!showHome ? (
        <div className="login">
          <div>
            <h1>LOGIN</h1>

            <label>Email Address</label>
            <br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label>Password</label>
            <br />
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button className="enter" onClick={checkInputs}>
              Login to your account
            </button>
            <p>
              I dont have an acount? <button className="sign">Sign Up</button>
            </p>
            {/* {showHome ? <HOME /> : ""} */}
          </div>
        </div>
      ) : (
        <HOME />
      )}
    </>
  );
}
export default Login;
