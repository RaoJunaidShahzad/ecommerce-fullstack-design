import React, { useState } from "react";

const CategorySidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.container}>
      {/* Sidebar & Banner Section */}
      <div style={styles.mainContent}>
        {/* Sidebar - Collapsible in Mobile View */}
        <div
          style={{ ...styles.sidebar, ...(isOpen ? styles.sidebarOpen : {}) }}
        >
          <button
            style={styles.toggleButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰ Categories
          </button>
          <ul style={styles.categoryList}>
            <li style={styles.activeCategory}>Automobiles</li>
            <li>Clothes and wear</li>
            <li>Home interiors</li>
            <li>Computer and tech</li>
            <li>Tools, equipment</li>
            <li>Sports and outdoor</li>
            <li>Animal and pets</li>
            <li>Machinery tools</li>
            <li>More category</li>
          </ul>
        </div>

        {/* Banner Section */}
        <div style={styles.banner}>
          <h2 style={styles.bannerText}>
            Latest trending <strong>Electronic items</strong>
          </h2>
          <button style={styles.learnMore}>Learn more</button>
        </div>
      </div>

      {/* User Actions Section */}
      <div style={styles.userActions}>
        <div style={styles.userCard}>
          <p>
            Hi, user <br /> let’s get started
          </p>
          <button style={styles.joinButton}>Join now</button>
          <button style={styles.loginButton}>Log in</button>
        </div>
        <div style={styles.offerCard}>Get US $10 off with a new supplier</div>
        <div style={styles.quoteCard}>
          Send quotes with supplier preferences
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    padding: "20px",
    backgroundColor: "#f9fafb",
    flexWrap: "wrap",
  },
  mainContent: {
    display: "flex",
    gap: "15px",
    flex: "1",
    minWidth: "300px",
  },
  sidebar: {
    width: "200px",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
  },
  sidebarOpen: {
    position: "absolute",
    top: "50px",
    left: "10px",
    zIndex: 10,
    width: "200px",
  },
  toggleButton: {
    display: "none",
    backgroundColor: "#a855f7",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  categoryList: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  activeCategory: {
    backgroundColor: "#e0e7ff",
    padding: "10px",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  banner: {
    backgroundColor: "#d1fae5",
    padding: "20px",
    borderRadius: "8px",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  bannerText: {
    fontSize: "20px",
    color: "#333",
  },
  learnMore: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
  userActions: {
    width: "250px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  userCard: {
    backgroundColor: "#eef2ff",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
  },
  joinButton: {
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: "8px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    marginTop: "5px",
  },
  loginButton: {
    backgroundColor: "#fff",
    border: "1px solid #2563eb",
    padding: "8px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    marginTop: "5px",
  },
  offerCard: {
    backgroundColor: "#fb923c",
    color: "#fff",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
  },
  quoteCard: {
    backgroundColor: "#34d399",
    color: "#fff",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
  },
};

/* 📱 Mobile Styling */
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .sidebar {
      display: none;
    }
    .toggleButton {
      display: block !important;
      margin-bottom: 10px;
    }
  }
`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueryStyles;
document.head.appendChild(styleSheet);

export default CategorySidebar;
