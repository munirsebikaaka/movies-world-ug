import { useState } from "react";

const SignIn = ({ setAcounts, setHasAccount, showApp, setShowApp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  function checkInputs() {
    if (!email || !password || !rePassword)
      return alert("please fill in all the inputs");
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
            <h1>Sign Up</h1>

            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="text"
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
