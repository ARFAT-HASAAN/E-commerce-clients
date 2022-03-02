import React from "react";
import "./Regester.css";
import logo from "../../../images/AZN_logo.jpg";
import { Link } from "react-router-dom";
import Usefirebase from "../../../Hooks/Usefirebase";
import { useState } from "react";
import UseAuth from "../../../context/UseAuth";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Regester = () => {
  let location = useLocation();
  const history = useHistory();
  console.log("came from", location.state?.from);
  const redirect_uri = location.state?.from || "/shop";
  const { newUser, error, SignWithGoogle, updateUser, setError, setUser } =
    UseAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const userName = (e) => {
    const name = e.target.value;
    console.log(name);
    setName(name);
  };
  const userEmail = (e) => {
    const email = e.target.value;
    console.log(email);
    setEmail(email);
  };
  const userPass = (e) => {
    const pass = e.target.value;
    console.log(pass);
    setPass(pass);
  };

  const FormSubmit = (e) => {
    e.preventDefault();

    newUser(name, email, pass)
      .then((userCredential) => {
        setUser(userCredential.user);
        history.push(redirect_uri);
        console.log(userCredential.user);
        updateUser(name);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const GoogleSingin = () => {
    SignWithGoogle();
  };

  return (
    <div>
      <div className="Form">
        <h2 className="title">Regester</h2>
        <img style={{ width: "100%", height: "130px" }} src={logo} alt="logo" />

        <form onSubmit={FormSubmit}>
          <label htmlFor="">Your Name</label> <br />
          <input onBlur={userName} type="text" /> <br />
          <label htmlFor="email">Your Email</label> <br />
          <input onBlur={userEmail} type="email" />
          <br />
          <label htmlFor="pass">Your Password </label>
          <br />
          <input onBlur={userPass} type="password" />
          <br />
          <input type="submit" value="Regester" />
          <br />
        </form>
        <span>{error}</span>
        <div>
          {" "}
          <p style={{ textAlign: "center" }}>or </p>
          <hr />
        </div>
        <div style={{ textAlign: "center" }}>
          <h5 style={{ textAlign: "center" }}>Sing with </h5>
          <button onClick={GoogleSingin}>Google</button>
          <button>Facebook</button>
          <button>Twitter</button>
          <button>Github</button>
          <p>
            Already have an account? <Link to={"/login"}>Sing in</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regester;
