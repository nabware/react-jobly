import { useState } from "react";
import { useContext } from "react";
import userContext from "../userContext";
import Alert from "../common/Alert";

/**
 * Form to update user profile
 *
 * Props:
 * - updateProfile: update profile function
 *
 * State:
 * - formData: {firstName, lastName, email}
 * - alerts: [{text: "Success", type: "success"}, ...]
 *
 * Context:
 * - user
 */
function ProfileForm({ updateProfile }) {
  console.log("Rendering ProfileForm...");

  const [alerts, setAlerts] = useState([]);
  const { user } = useContext(userContext);

  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });

  /** Takes DOM event and calls updateProfile function and handles errors. */

  async function handleSubmit(evt) {
    evt.preventDefault();
    setAlerts([]);

    try {
      await updateProfile(user.username, formData);

      setAlerts([{ text: "Updated successfully.", type: "success" }]);

    } catch (errors) {
      setAlerts(errors.map(e => ({ text: e, type: "danger" })));
    }
  };

  /** Takes DOM event and sets formData state. */

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(prevData => {
      return { ...prevData, [name]: value };
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
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

      {alerts.length > 0 && <Alert messages={alerts} />}

    </div>);
}

export default ProfileForm;
