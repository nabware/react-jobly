import { useState } from "react";
import { useContext } from "react";
import userContext from "../userContext";
import { Navigate } from "react-router-dom";
import Alert from "../common/Alert";

/**
 * Form to signup user
 *
 * Props:
 * - signup: signup function
 *
 * State:
 * - formData: {username, password, firstName, lastName, email}
 * - errors: [error, ...]
 *
 * Context:
 * - user
 */
function SignupForm({ signup }) {
  console.log("Rendering SignupForm...");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  });

  const [errors, setErrors] = useState([]);
  const { user } = useContext(userContext);

  /** Takes DOM event and calls signup function and handles errors. */

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await signup(formData);

    } catch (errors) {
      setErrors(errors);
    }
  };

  /** Takes DOM event and sets formData state. */

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(prevData => {
      return { ...prevData, [name]: value };
    });
  }

  if (user) return <Navigate replace to="/" />;

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
          type="password"
          autoComplete="off"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange} />

        <label htmlFor="">First Name:</label>
        <input
          type="text"
          placeholder="firstname"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange} />

        <label htmlFor="">Last Name:</label>
        <input
          type="text"
          placeholder="lastname"
          name="lastName"
          value={formData.lastName}
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
