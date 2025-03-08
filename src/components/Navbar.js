import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Left Section: Hamburger + Brand */}
        <div style={styles.leftSection}>
          <button
            style={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <div style={styles.brand}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
              alt="Brand Logo"
              style={styles.logo}
            />
            <span style={styles.brandText}>Brand</span>
          </div>
        </div>

        {/* Right Section: Cart + Profile */}
        <div style={styles.iconsContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="Cart"
            style={styles.iconImg}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
            alt="Profile"
            style={styles.iconImg}
          />
        </div>
      </div>

      {/* Search Bar (Hidden on Desktop, Visible on Mobile) */}
      <div style={styles.searchContainer}>
        <input type="text" placeholder="🔍 Search" style={styles.searchInput} />
      </div>

      {/* Responsive Menu */}
      {isMenuOpen && (
        <div style={styles.mobileMenu}>
          <p style={styles.menuItem}>Profile</p>
          <p style={styles.menuItem}>Orders</p>
          <p style={styles.menuItem}>Cart</p>
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    width: "100%",
    backgroundColor: "#fff",
    borderBottom: "2px solid rgb(226, 226, 226)",
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
  },
  menuButton: {
    fontSize: "24px",
    background: "none",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "40px",
    height: "40px",
    marginRight: "8px",
  },
  brandText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#82b1ff",
  },
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  iconImg: {
    width: "24px",
    height: "24px",
    cursor: "pointer",
  },
  searchContainer: {
    width: "90%",
    marginTop: "10px",
  },
  searchInput: {
    width: "90%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  mobileMenu: {
    width: "90%",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    marginTop: "10px",
    padding: "10px 0",
    textAlign: "center",
  },
  menuItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
  },
};

export default Navbar;
