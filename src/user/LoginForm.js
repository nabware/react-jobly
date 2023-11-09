import { useState } from "react";
/**
* Login user and update user state
*
*/
function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevData => {
      return { ...prevData, [name]: value };
    });
  }

  return (<form onSubmit={handleSubmit}>
    <label htmlFor="username">Username:</label>
    <input
      type="text"
      placeholder="username"
      name="username"
      value={formData.username}
      onChange={handleChange} />
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      placeholder="password"
      name="password"
      value={formData.password}
      onChange={handleChange} />
    <button type="submit">Login</button>
  </form>);
}

export default LoginForm;
