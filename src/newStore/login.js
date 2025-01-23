import { useState } from "react";

function Login({ acounts }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showHome, setShowHome] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  function checkInputs() {
    if (!name || !email || !password || !phone)
      return setAlertMsg("please fill in all the inputs");
    acounts.map(
      (el) =>
        phone === el.phone && password === el.password && setShowHome(true)
    );
  }
  return (
    <div>
      <h1>{alertMsg}</h1>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="number"
        placeholder="phone number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={checkInputs}>click</button>
      <p>
        i dont have an acount <button>Sign up</button>
      </p>
      {showHome ? <h1>welcome HOME {name}</h1> : ""}
    </div>
  );
}
export default Login;
