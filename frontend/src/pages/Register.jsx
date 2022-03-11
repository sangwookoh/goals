import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { email, name, password, password2 } = formData;
  const onChange = (e) => {
    setFormData(e.target.value);
  };

  const onSubmit = (e) => {
    e.prventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Pleas create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <form>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder="enter your name"
                onChange={onChange}
              />
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="enter your email"
                onChange={onChange}
              />
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="enter your password"
                onChange={onChange}
              />
              <input
                type="password"
                className="form-control"
                id="password2"
                name="password2"
                value={password2}
                placeholder="enter your password2"
                onChange={onChange}
              />
            </form>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
