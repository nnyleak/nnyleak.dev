import { Link } from "react-router-dom";
import Logo from "../assets/icons/simple-logo.svg?react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="nav-logo">
          <Logo />
        </div>
        <span className="nav-handle">nnyleak.dev</span>
      </div>
      <div className="nav-right">
        <Link className="nav-btn" to="/#work">
          WORK
        </Link>
        <Link className="nav-btn" to="/#play">
          PLAY
        </Link>
        <Link className="nav-btn" to="/#contact">
          CONTACT
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
