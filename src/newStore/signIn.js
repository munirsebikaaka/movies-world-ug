import { useState } from "react";

const SignIn = ({ setAcounts, setHasAccount, showApp, setShowApp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [checkFill, setCheckFill] = useState(false);

  const [match, setMatch] = useState("");

  function checkInputs() {
    if (!password) return setCheckFill(true);
    if (password !== rePassword) return setMatch("Doesn't match!");
    setAcounts((acounts) => [
      ...acounts,
      { email: email, rePassword: rePassword, password: password },
    ]);
  }
  return (
    <>
      {!showApp && (
        <div className="login">
          <div>
            <p className="erorr2">{checkFill ? "Can,t be empty!" : ""}</p>
            <p className="erorr3">{match}</p>
            <h1>Sign Up</h1>
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              style={
                checkFill
                  ? { borderBottom: "1px solid red" }
                  : { borderBottom: "1px solid #5a698f" }
              }
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Repeat password"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
            />
            <button onClick={checkInputs} className="enter">
              Create an account
            </button>
            <p>
              Already have an account?
              <button onClick={() => setHasAccount(true)} className="sign">
                Login
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default SignIn;
