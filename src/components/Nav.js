import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={navStyle} className="navbar bg-warning">
      <Link to="/" className="navbar-brand">
        <h4>STUDENT RECORD MANAGEMENT SYSTEM</h4>
      </Link>
      <div style={linkContainerStyle}>
        <Link to="/create-student" style={linkStyle} className="nav-link">
          Create Student
        </Link>
        <Link to="/student-list" style={linkStyle} className="nav-link">
          Student List
        </Link>
      </div>
    </nav>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px"
};

const linkContainerStyle = {
  display: "flex"
};

const linkStyle = {
  marginRight: "10px",
  textDecoration: "none",
  color: "#000"
};

export default Nav;
