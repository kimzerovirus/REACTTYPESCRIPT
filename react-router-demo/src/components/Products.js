import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <input type="search" placeholder="Search products" />
      <nav className="subNav">
        <Link to="/products/featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default Products;
