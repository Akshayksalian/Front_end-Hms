import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginAndReg.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginAndReg() {
  let nav = useNavigate();

  const [state, setState] = useState({
    login: "show col-lg-6 px-lg-4",
    register: "hide",
  });

  const showlogin = () => {
    setState({ login: "show col-lg-6 px-lg-4", register: "hide" });
  };
  const showregister = () => {
    setState({ login: "hide", register: "show col-lg-6 px-lg-4" });
  };

  const [logData, setLogData] = useState({
    admin_email: "",
    admin_password: "",
  });

  function submitLogin(e) {
    e.preventDefault();
    Axios.post("http://localhost:8080/hms/web/reg/login", {
      admin_email: logData.admin_email,
      admin_password: logData.admin_password,
      admin_name: "default",
    }).then((res) => {
      if (res.data === "Access") {
        move();
      } else {
        alert("Plase enter corrent email and password");
      }
    });
  }

  const move = () => {
    nav("/job");
  };

  function logHandle(e) {
    const newdata = { ...logData };
    newdata[e.target.name] = e.target.value;
    setLogData(newdata);
    console.log(newdata);
  }

  // From here for registeration
  const url = "http://localhost:8080/hms/web/reg";

  const [data, setData] = useState({
    admin_email: "",
    admin_name: "",
    admin_password: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      admin_email: data.admin_email,
      admin_name: data.admin_name,
      admin_password: data.admin_password,
    }).then((res) => {
      console.log(res.data);
    });
    nav("/job");
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div className="App">
      <div className="page-holder align-items-center py-4 bg-gray-100 vh-100">
        <div className="container">
          <div className="row align-items-center">
            <div className={state.login}>
              <div className="card">
                <div className="card-header px-lg-5">
                  <div className="card-heading text-primary">
                    <h3>Login</h3>
                  </div>
                </div>
                <div className="card-body p-lg-5">
                  <h3 className="mb-4">Hi, welcome back! 👋👋</h3>
                  <p className="text-muted text-sm mb-5">
                    “Recruiting should be viewed as a business partner, someone
                    who is critical to the success of the business.”
                  </p>
                  <form id="loginForm" action="index.html">
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="logfloatingInput"
                        type="text"
                        name="admin_email"
                        onChange={(e) => logHandle(e)}
                        value={logData.admin_email}
                        placeholder="Enter your user name"
                        required
                      />
                      <label htmlFor="logfloatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="logfloatingPassword"
                        name="admin_password"
                        type="password"
                        onChange={(e) => logHandle(e)}
                        value={logData.admin_password}
                        minLength={6}
                        maxLength={20}
                        placeholder="Enter your password"
                        required
                      />
                      <label htmlFor="logfloatingPassword">Password</label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                        id="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={(e) => submitLogin(e)}
                    >
                      Login
                    </button>
                  </form>
                </div>
                <div className="card-footer px-lg-5 py-lg-4">
                  <div className="text-sm text-muted">
                    Don't have an account?{" "}
                    <a onClick={showregister}>Register</a>.
                  </div>
                </div>
              </div>
            </div>
            {/*} register {*/}
            <div className={state.register}>
              <div className="card">
                <div className="card-header px-lg-5">
                  <div className="card-heading text-primary">
                    <h3>Register</h3>
                  </div>
                </div>
                <div className="card-body p-lg-5">
                  <h3 className="mb-4">Let's Get Started ✨🎉</h3>
                  <p className="text-muted text-sm mb-5">
                    “Acquiring the right talent is the most important key to
                    growth. Hiring was – and still is – the most important thing
                    we do.”
                  </p>
                  <form action="index.html">
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        type="text"
                        name="admin_name"
                        onChange={(e) => handle(e)}
                        value={data.admin_name}
                        placeholder="Enter your user name"
                        required
                      />
                      <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="regfloatingInput"
                        name="admin_email"
                        onChange={(e) => handle(e)}
                        value={data.admin_email}
                        placeholder="Enter your email"
                        required
                      />
                      <label htmlFor="regfloatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="regfloatingPassword"
                        type="password"
                        name="admin_password"
                        onChange={(e) => handle(e)}
                        value={data.admin_password}
                        minLength={6}
                        maxLength={20}
                        placeholder="Enter your password"
                        required
                      />
                      <label htmlFor="regfloatingPassword">Password</label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="agree"
                        id="agree"
                      />
                      <label className="form-check-label" htmlFor="agree">
                        I agree with the <a href="#">Terms & Conditions</a>.
                      </label>
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-primary"
                        id="regidter"
                        type="button"
                        name="registerSubmit"
                        onClick={(e) => submit(e)}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer px-lg-5 py-lg-4">
                  <div className="text-sm text-muted">
                    Already have an account? <a onClick={showlogin}>Login</a>.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary">
              <img
                className="img-fluid mb-4"
                width="300"
                src="https://pyjamahr.com/wp-content/uploads/2021/10/istockphoto-1065103176-612x612-1.jpg"
                alt=""
                style={{ transform: "rotate(10deg)" }}
              />
              <h1 className="mb-4 text-secondary">
                Hiring Management System <br className="d-none d-lg-inline" />
              </h1>
              <p class="text-secondary">
                <em>
                  A Hiring Management System (HMS) is an HR tool used to
                  automate and manage a company's recruitment process. An HMS
                  helps you publish job postings, share on different sourcing
                  channels, manage candidates, schedule interviews, and enables
                  your end-to-end hiring process.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
