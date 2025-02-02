import React, { Fragment, useEffect } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Fragment>
      <nav class="navbar row">
        <div class="col-12 col-md-3">
          <div class="navbar-brand">
            <Link to="/">
              {" "}
              <img width="150px" src="./images/logo.png" alt="logo" />
            </Link>
          </div>
        </div>

        <div class="col-12 col-md-6 mt-2 mt-md-0">
          <Search />
        </div>

        <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <button class="btn" id="login_btn">
            Login
          </button>

          <span id="cart" class="ml-3">
            Cart
          </span>
          <span class="ml-1" id="cart_count">
            2
          </span>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
