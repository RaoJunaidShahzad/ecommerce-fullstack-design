import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Brand Logo */}
        <div style={styles.brand}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
            alt="Brand Logo"
            style={styles.logo}
          />
          <span style={styles.brandText}>Brand</span>
        </div>

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input type="text" placeholder="Search" style={styles.searchInput} />
          <select style={styles.categoryDropdown}>
            <option>All category</option>
          </select>
          <button style={styles.searchButton}>Search</button>
        </div>

        {/* User Icons */}
        <div style={styles.iconsContainer}>
          <div style={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              alt="Profile"
              style={styles.iconImg}
            />
            <span>Profile</span>
          </div>
          <div style={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/482/482947.png"
              alt="Message"
              style={styles.iconImg}
            />
            <span>Message</span>
          </div>
          <div style={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
              alt="Orders"
              style={styles.iconImg}
            />
            <span>Orders</span>
          </div>
          <div style={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              alt="Cart"
              style={styles.iconImg}
            />
            <span>My cart</span>
          </div>
        </div>
      </div>
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
    justifyContent: "center",
  },
  container: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
  searchContainer: {
    display: "flex",
    alignItems: "center",
    border: "2px solid #007bff",
    borderRadius: "5px",
    overflow: "hidden",
  },
  searchInput: {
    border: "none",
    padding: "10px",
    width: "250px",
    outline: "none",
  },
  categoryDropdown: {
    border: "none",
    padding: "10px",
    backgroundColor: "#fff",
    cursor: "pointer",
  },
  searchButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "11px 15px",
    cursor: "pointer",
  },
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  icon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "12px",
    color: "#7a7a7a",
    cursor: "pointer",
  },
  iconImg: {
    width: "20px",
    height: "20px",
    marginBottom: "3px",
  },
};

export default Navbar;
