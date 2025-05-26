import { useState } from "react";
// import './navbar.css'
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../../sass/components/layouts/NavUser/navuser.css";

const NavUser = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Buat Janji", path: "/buat-janji" },
    { name: "Jadwal", path: "/jadwal" },
    { name: "Edukasi", path: "/edukasi" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <header className="header">
      <div className="container-custom py-4">
        <div className="header__wrapper">
          {/* Logo */}
          <Link to="/" className="header__logo" onClick={closeMenu}>
            <img src={logo} alt="" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive(item.path) ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/guest/login">
              <button className="nav-login">Login</button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <div size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="nav-mobile">
          <div className="container-custom py-4 nav-mobile__content">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive(item.path) ? "active" : ""}`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/login" onClick={closeMenu}>
              {/* <Button className="nav-login full">Login</Button> */}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavUser;
