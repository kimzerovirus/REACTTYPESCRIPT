import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";

function NavBar() {
  //.active를 css에서 추가해도 되지만 style을 navlink에 props로 제공해도 된다.
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();

  return (
    <nav className="mainNav">
      {/* <NavLink style={navLinkStyles} to="/">Home</NavLink> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!auth.user && <NavLink to="/login">Login</NavLink>}
      {/* {!auth.user ? (
        <NavLink to="/login">Login</NavLink>
      ) : (
        <NavLink to="/profile">Profile</NavLink>
      )} */}
    </nav>
  );
}

export default NavBar;
