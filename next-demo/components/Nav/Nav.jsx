import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <ul style={{ display: "flex" }} className="navbar-brand">
          <li>
            <Link href="/" className="h1">
              Home
            </Link>
          </li>
          <li className="ms-3">
            <Link href="/cats" className="h1">
              Cats
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
