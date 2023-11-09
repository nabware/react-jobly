import { useState } from "react";
import { useContext } from "react";
import userContext from "../userContext";
import { Navigate } from "react-router-dom";
import Alert from "../common/Alert";

/**
 * Singup user
 *
 *Props:
 * - signup: signup function
 *
 * - formData: {username, password, firstname, lastname, email}
 * - errors: [error, ...]
 */
function SignupForm({ signup }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: ""
  });

  const [errors, setErrors] = useState([]);
  const { token } = useContext(userContext);

  async function handleSubmit(evt) {
    evt.preventDefault();

    const errors = await signup(formData);

    if (errors.length > 0) {
      setErrors(errors);
    }
  };

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevData => {
      return { ...prevData, [name]: value };
    });
  }

  if (token) return <Navigate replace to="/" />;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={handleChange} />

        <label htmlFor="">Password:</label>
        <input
          type="text"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange} />

        <label htmlFor="">First Name:</label>
        <input
          type="text"
          placeholder="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange} />

        <label htmlFor="">Last Name:</label>
        <input
          type="text"
          placeholder="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange} />

        <label htmlFor="">Email:</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0 &&
        <Alert messages={errors} className="alert alert-danger" />}

    </div>);
}

export default SignupForm;
