import { useState } from "react";
function Login({ acounts, setHasAccount, showApp, setShowApp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fill, setFill] = useState("");
  const [checkFill, setCheckFill] = useState(false);

  function checkInputs() {
    if (!password) return setCheckFill(true);
    acounts.map(
      (el) => email === el.email && password === el.password && setShowApp(true)
    );
    acounts.map((el) => password !== el.password && setFill("Wrong password!"));
  }
  return (
    <>
      {!showApp && (
        <div className="login">
          <div>
            <p className="erorr">
              {checkFill ? "Can't be empty!" : ""} {fill}
            </p>
            <h1>Login</h1>
            <input
              placeholder="Email Address"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              style={
                checkFill
                  ? { borderBottom: "1px solid red" }
                  : { borderBottom: "1px solid #5a698f" }
              }
              type="password"
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
