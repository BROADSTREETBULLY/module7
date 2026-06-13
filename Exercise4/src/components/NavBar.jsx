import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({children}) {
  return (
    <>
    <nav className="NavBar">
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/bitcoin-rates">BitCoin Rates</NavLink>
        </li>
      </ul>{" "}
    </nav>
    {children}
    </>
  );
}
