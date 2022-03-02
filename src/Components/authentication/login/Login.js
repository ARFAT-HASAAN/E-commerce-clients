import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import UseAuth from "../../../context/UseAuth";
import Usefirebase from "../../../Hooks/Usefirebase";
import logo from "../../../images/AZN_logo.jpg";

const Login = () => {
  let location = useLocation();
  const history = useHistory();
  console.log(location.state?.from);
  const redirect_uri = location.state?.from || "/shop";
  const { OldUser, error, SignWithGoogle, setUser, setError } = UseAuth();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

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

  const formSubmit = (e) => {
    e.preventDefault();
    OldUser(email, pass)
      .then((userCredential) => {
        setUser(userCredential.user);
        history.push(redirect_uri);
        console.log(userCredential.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // google sign
  const GoogleSignIn = () => {
    SignWithGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
        console.log(result.user);
        setError("");
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // olduser
  // const poranUser () = > {}
  return (
    <div>
      <div className="Form">
        <h2 className="title">Sign in</h2>
        <img style={{ width: "100%", height: "130px" }} src={logo} alt="logo" />

        <form onSubmit={formSubmit}>
          <label htmlFor="email">Your Email</label> <br />
          <input type="email" onBlur={userEmail} required />
          <br />
          <label htmlFor="pass">Your Password </label>
          <br />
          <input type="password" onBlur={userPass} />
          <br />
          <input type="submit" value="Sign in" />
          <br />
        </form>
        <span>{error} </span>
        <div>
          {" "}
          <p style={{ textAlign: "center" }}>or </p>
          <hr />
        </div>
        <div style={{ textAlign: "center" }}>
          <h5 style={{ textAlign: "center" }}>Sing with </h5>
          <button onClick={GoogleSignIn}>Google</button>
          <button>Facebook</button>
          <button>Twitter</button>
          <button>Github</button>
          <p>
            Create new account? <Link to={"regester"}>Regester</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
