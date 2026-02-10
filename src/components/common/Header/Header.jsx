import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  return (
    <div className="app-sticky-header">
      <div className="app-header-container">
        <h1 className="app-title">Social Media Content Planner</h1>

        <nav className="app-nav">
          <Link
            to="/"
            className={`app-nav-link ${location.pathname === "/" ? "app-nav-link-active" : ""}`}
          >
            📊 Dashboard
          </Link>
          <Link
            to="/create"
            className={`app-nav-link ${location.pathname === "/create" ? "app-nav-link-active" : ""}`}
          >
            ➕ Create Post
          </Link>
        </nav>
      </div>
    </div>
  );
}
