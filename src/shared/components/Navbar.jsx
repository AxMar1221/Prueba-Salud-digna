import { Avatar, Button, IconButton } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Prueba
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/form"
          >
            Formulario
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/register"
          >
            Registros
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link active">
            <strong>Mario Hernández</strong>
            <IconButton>
              <Avatar
                alt="Tachi GitHub"
                src="https://avatars.githubusercontent.com/u/85906328?v=4"
                sx={{ width: 24, height: 24 }}
              />
            </IconButton>
            <small>Tachi</small>
          </span>
          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={onLogout}
          >
            Logout
          </Button>
        </ul>
      </div>
    </nav>
  );
};
