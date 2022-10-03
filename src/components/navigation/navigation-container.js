import React from "react";
import axios from "axios";
import {withRouter} from 'react-router';
import { NavLink } from "react-router-dom";
import { FontAwesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavigationComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          PortfolioManager
        </NavLink>
      </div>
    );
  };

  const handleSignOut= () => {
    axios.delete("https://api.devcamp.space/logout", {withCredentials: true})
    .then(response => {
        if(response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        };

      return response.data;
    })
    .catch(error => {
      console.log("Error al cerrar sesion", error);
      });
  };

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about-me" activeClassName="nav-link-active">
            About
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/contact" activeClassName="nav-link-active">
            Contact
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/blog" activeClassName="nav-link-active">
            Blog
          </NavLink>
        </div>
        

        {props.loggedInStatus === "LOGGED_IN"
          ? dynamicLink("/portfolio-manager", "PortfolioManager")
        : null}

      </div>

      <div className="right-side">
        SUSANA PARACUELLOS
        {props.loggedInStatus === 'LOGGED_IN' 
        ? ( <a onClick={handleSignOut}>
          <FontAwesomeIcon icon="sign-out-alt" />
        </a>)
        : null}
      </div>
    </div>
  );
}
export default withRouter(NavigationComponent);
