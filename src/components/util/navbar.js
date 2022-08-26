import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="kiwi-logo">🥝</div>
      <Link to={"/"} className="nav-link font-bold">
        Kiwis
      </Link>
      <div className="flex grow justify-end gap-3">
        <Link to={"/"} className="nav-link">
          Home
        </Link>
        <Link to={"/info"} className="nav-link">
          Info
        </Link>
        <Link to={"/pictures"} className="nav-link">
          Pictures
        </Link>
        <Link to={"/about"} className="nav-link">
          About
        </Link>
      </div>
    </nav>
  );
}
