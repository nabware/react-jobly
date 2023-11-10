import { useState } from "react";
import { useContext } from "react";
import userContext from "../userContext";
import { Navigate } from "react-router-dom";
import Alert from "../common/Alert";

/**
 * Form to update user profile
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
function ProfileForm({ updateProfile }) {
  console.log("Rendering ProfileForm...");

  const [errors, setErrors] = useState([]);
  const { user } = useContext(userContext);


  const [formData, setFormData] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });


  /** Takes DOM event and calls updateProfile function and handles errors. */

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await updateProfile(user.username, formData);

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

  // if (user) return <Navigate replace to="/" />;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          disabled />

        <label htmlFor="">First Name:</label>
        <input
          type="firstName"
          autoComplete="off"
          placeholder="firstName"
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

export default ProfileForm;
