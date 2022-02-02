import React from "react";
import { Outlet, Link, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <Link to="/users/1">User 1</Link>
      <Link to="/users/2">User 2</Link>
      <Link to="/users/3">User 3</Link>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
        {
          showActiveUsers ? (<h2>Showing active users</h2>): (<h2>Showing all users</h2>)
        }
      </div>
    </div>
  );
}

export default Users;
