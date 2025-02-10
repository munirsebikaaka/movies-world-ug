import { useState } from "react";
function Login({ acounts, setHasAccount, showApp, setShowApp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function checkInputs() {
    if (!email || !password) return alert("please fill in all the inputs");
    acounts.map(
      (el) => email === el.email && password === el.password && setShowApp(true)
    );
  }
  return (
    <>
      {!showApp && (
        <div className="login">
          <div>
            <h1>Login</h1>

            <input
              placeholder="Email Address"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={checkInputs} className="enter">
              Login to your account
            </button>
            <p>
              Don’t have an acount?
              <button onClick={() => setHasAccount(false)} className="sign">
                Sign Up
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
export default Login;
