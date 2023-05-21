import React from "react";
import { Link, Outlet } from "react-router-dom";

export const MenuLayout = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full p-4">
        <p>Logo</p>

        <div className="flex inline-block space-x-10">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/about-us">
            <p>About Us</p>
          </Link>
          <Link to="/contact-us">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
};
