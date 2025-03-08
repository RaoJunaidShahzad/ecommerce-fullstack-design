import React from "react";

const TopNavbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Left Side - Categories & Menu */}
        <div style={styles.menu}>
          <span style={styles.icon}>☰</span>
          <span>All category</span>
          <span>Hot offers</span>
          <span>Gift boxes</span>
          <span>Projects</span>
          <span>Menu item</span>
          <span>Help ⌄</span>
        </div>

        {/* Right Side - Language & Shipping */}
        <div style={styles.options}>
          <span>English, USD ⌄</span>
          <span>
            Ship to{" "}
            <img
              src="https://flagcdn.com/w40/de.png"
              alt="Germany Flag"
              style={styles.flag}
            />{" "}
            ⌄
          </span>
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
    fontSize: "14px",
    color: "#333",
  },
  menu: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    cursor: "pointer",
  },
  icon: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  options: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    cursor: "pointer",
  },
  flag: {
    width: "18px",
    height: "12px",
    marginLeft: "5px",
    verticalAlign: "middle",
  },
};

export default TopNavbar;
