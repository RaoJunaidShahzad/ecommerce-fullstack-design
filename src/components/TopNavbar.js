import React from "react";

const categories = [
  "All category",
  "Hot offers",
  "Gift boxes",
  "Projects",
  "Menu item",
  "Help ⌄",
  "English, USD ⌄",
  "Ship to 🇩🇪 ⌄",
];

const TopNavbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Scrollable Category & Options */}
        <div style={styles.trackContainer}>
          {categories.map((item, index) => (
            <span key={index} style={styles.trackItem}>
              {item.includes("Ship to") ? (
                <>
                  Ship to{" "}
                  <img
                    src="https://flagcdn.com/w40/de.png"
                    alt="Germany Flag"
                    style={styles.flag}
                  />{" "}
                  ⌄
                </>
              ) : (
                item
              )}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    width: "94%",
    backgroundColor: "#fff",
    borderBottom: "2px solid rgb(226, 226, 226)",
    padding: "10px 10px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  trackContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "nowrap",
    overflowX: "auto", // Enable horizontal scrolling
    whiteSpace: "nowrap",
    paddingBottom: "5px",
    scrollbarWidth: "none", // Hide scrollbar in Firefox
    msOverflowStyle: "none", // Hide scrollbar in IE/Edge
  },
  trackItem: {
    padding: "8px 15px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    cursor: "pointer",
    color: "rgb(35 36 37 / 58%)",
    fontWeight: "bold",
    flexShrink: 0, // Prevent items from shrinking
  },
  flag: {
    width: "18px",
    height: "12px",
    marginLeft: "5px",
    verticalAlign: "middle",
  },
};

export default TopNavbar;
