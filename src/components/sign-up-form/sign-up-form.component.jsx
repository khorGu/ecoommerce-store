import { useState } from "react";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const ChangeHandler = (evenet) => {
    const { name, value } = evenet.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with Email and Password</h1>
      <form action="" onSubmit={() => {}}>
        <label>DisplayName</label>
        <input
          type="text"
          required
          name="displayName"
          onChange={ChangeHandler}
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          name="email"
          value={email}
          onChange={ChangeHandler}
        />

        <label>Password</label>
        <input
          type="password"
          required
          name="password"
          value={password}
          onChange={ChangeHandler}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={ChangeHandler}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
