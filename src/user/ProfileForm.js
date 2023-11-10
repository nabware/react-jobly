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
    <div className="container text-start">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            type="text"
            placeholder="username"
            name="username"
            value={user.username}
            disabled />
        </div>

        <div class="form-group mb-3">
          <label htmlFor="">First Name</label>
          <input
            className="form-control"
            type="firstName"
            autoComplete="off"
            placeholder="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange} />
        </div>

        <div class="form-group mb-3">
          <label htmlFor="">Last Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="lastname"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange} />
        </div>

        <div class="form-group mb-3">
          <label htmlFor="">Email</label>
          <input
            className="form-control"
            type="text"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary mb-3">Update</button>
      </form>

      {alerts.length > 0 && <Alert messages={alerts} />}

    </div>);
}

export default ProfileForm;
