import { useState } from "react";

const SignIn = ({ setAcounts }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  function checkInputs() {
    if (!fullName || !email || !password || !phone)
      return alert("please fill in all the inputs");
    setAcounts((acounts) => [
      ...acounts,
      { name: fullName, email: email, phone: phone, password: password },
    ]);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="email address"
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
        type="number"
        placeholder="phone number"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <button onClick={checkInputs}>click</button>
      <p>
        aready has an acount <button>log in</button>
      </p>
    </div>
  );
};
export default SignIn;
