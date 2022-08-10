import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Login from "./Auth/Login";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { userActions } from "./store/user-slice";
import { userActions } from "../store/user-slice";

const config = {
  apiKey: "AIzaSyDnhbRO0UG3wTqfeuLrAv6TtXQQ5gOR1iw",
  authDomain: "shop-auth-f2ba0.firebaseapp.com",
};

firebase.initializeApp(config);
const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userName);
  const displayname = user.split(" ")[0];
  const quantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);

        if (user) {
          dispatch(userActions.loggedIn(user.displayName));
        }
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [dispatch]);


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container">
        <NavLink
          to="/"
          className="navbar-brand fw-bold fs-4"
          style={{ color: "rgb(187, 68, 68)" }}
        >
          DUSK COLLECTION
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <NavLink
            to="/cart"
            className="btn ms-2"
            style={{
              backgroundColor: "rgb(187, 68, 68)",
              color: "#fff",
              ":hover": { filter: "brightness(120%)" },
            }}
          >
            <i className="fa fa-shopping-cart me-1"></i>Cart({quantity})
          </NavLink>
          <div className="buttons d-flex">
            {isSignedIn ? (
              <div>
                <div
                  className="btn ms-2"
                  style={{
                    backgroundColor: "rgb(187, 68, 68)",
                    color: "#fff",
                    ":hover": { filter: "brightness(120%)" },
                  }}
                >
                  <i className="fa fa-user me-1"></i>
                  {displayname}
                </div>
                <div
                  className="btn ms-2"
                  style={{
                    backgroundColor: "rgb(187, 68, 68)",
                    color: "#fff",
                    ":hover": { filter: "brightness(120%)" },
                  }}
                  onClick={() => firebase.auth().signOut()}
                >
                  Logout
                </div>
              </div>
            ) : (
              <div
                className="btn ms-2"
                style={{
                  backgroundColor: "rgb(187, 68, 68)",
                  color: "#fff",
                  ":hover": { filter: "brightness(120%)" },
                }}
              >
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
