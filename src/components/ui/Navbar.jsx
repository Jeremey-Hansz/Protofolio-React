import '../../assets/navbar.css';

export const Navbar = ({ scrollToSection }) => {
  const navItems = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">JvdH</div>
          <div className="navbar-links">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="navbar-link"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};