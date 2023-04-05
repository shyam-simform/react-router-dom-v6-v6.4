import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
        // style={({ isActive }) => {
        //   return { color: isActive ? "#645cff" : "grey" };
        // }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
        // style={({ isActive }) => {
        //   return { color: isActive ? "#645cff" : "grey" };
        // }}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "link active" : "link")}
        // style={({ isActive }) => {
        //   return { color: isActive ? "#645cff" : "grey" };
        // }}
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "link active" : "link")}
        // style={({ isActive }) => {
        //   return { color: isActive ? "#645cff" : "grey" };
        // }}
      >
        Login
      </NavLink>
    </nav>
  );
};
export default Navbar;
