import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3002/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);
    alert("Login Successfully");

    setFormData({
      username: "",
      password: "",
    });
    window.location.href = "http://localhost:3001/";
  };

  return (
    <div className="row mt-5">
      <div className="col-4 offset-4">
        <h1 className="fs-2 text-muted mb-5">Login For Stock</h1>

        <div className="signup1">
          <form onSubmit={handleSubmit} className="needs-validation" novalidate>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                required
                name="username"
                placeholder="Enter name"
                className="form-control"
                onChange={handleChange}
                value={formData.username}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                required
                name="password"
                placeholder="Enter password"
                className="form-control"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
              <button className="btn mt-5 text-center w-100" style={{ backgroundColor: "blue", color: "white" }}>
                Login
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
