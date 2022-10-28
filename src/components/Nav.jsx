import { NavLink, Outlet } from "react-router-dom";

import React from "react";

function Nav() {
  return (
    <>
      <nav className="navigation">
      <p></p>
        <div className="navigation-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to={"/users"}>Users</NavLink>
        </div>

        
      </nav>
      <nav className="navigation">
      <p></p>
        <div className="navigation-links">
          <NavLink to="/"></NavLink>

          <NavLink to={"/users"}></NavLink>
        </div>

        
      </nav>
      <Outlet/>
    </>

    // <>
    //   <ul>
    //     <NavLink to="home" className="nav">
    //       Home
    //     </NavLink>
    //     <NavLink to="/">About</NavLink>
    //     <NavLink to="users">users</NavLink>
    //     <NavLink to="signIn">signIn</NavLink>
    //   </ul>
    //   <Outlet />
    // </>
  );
}

export default Nav;
