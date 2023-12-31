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
 * - alerts: [{text: "Success", type: "success"}, ...]
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

  const [alerts, setAlerts] = useState([]);
  const { user } = useContext(userContext);

  /** Takes DOM event and calls signup function and handles errors. */

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await signup(formData);

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

  if (user) return <Navigate replace to="/" />;

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
            value={formData.username}
            onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="">Password</label>
          <input
            className="form-control"
            type="password"
            autoComplete="off"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="">First Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="firstname"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="">Last Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="lastname"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="">Email</label>
          <input
            className="form-control"
            type="text"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary mb-3">Signup</button>
      </form>

      {alerts.length > 0 && <Alert messages={alerts} />}

    </div>);
}

export default SignupForm;
