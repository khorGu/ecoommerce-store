import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
const defaultFieldsForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFieldsForm);

  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resetFields = () => {
      setFormFields(defaultFieldsForm);
    };

    if (password != confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });
      resetFields();
    } catch (error) {
      console.log("error", error);
    }
  };

  const ChangeHandler = (evenet) => {
    const { name, value } = evenet.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2> Don't have an Account?</h2>
      <span>Sign Up with Email and Password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={ChangeHandler}
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={ChangeHandler}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={ChangeHandler}
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          onChange={ChangeHandler}
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
