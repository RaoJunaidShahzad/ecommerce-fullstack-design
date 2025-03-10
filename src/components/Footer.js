import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const styles = {
  footer: {
    borderTop: "4px solid #ccc",
    padding: "30px",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: "1000px",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "start",
    paddingBottom: "20px",
  },
  brand: {
    flex: "1",
    textAlign: "left",
    minWidth: "250px",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  linksContainer1: {
    flex: "2",
    display: "flex",
    justifyContent: "space-around",
    width: "400px",
  },
  linkSection: {
    textAlign: "left",
  },
  linkTitle: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  links: {
    listStyle: "none",
    padding: 0,
  },
  linkItem: {
    color: "#666",
    textDecoration: "none",
    fontSize: "14px",
    display: "block",
    marginBottom: "5px",
    cursor: "pointer",
  },
  appLinks: {
    marginTop: "10px",
  },
  footerBottom: {
    borderTop: "1px solid #ccc",
    padding: "15px 0",
    marginTop: "15px",
    fontSize: "14px",
    color: "#666",
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand Section */}
        <div style={styles.brand}>
          <h2 style={{ color: "#007bff" }}>Brand</h2>
          <p>
            Best information about the company goes here but now lorem ipsum is
          </p>
          <div style={styles.socialIcons}>
            <FaFacebook size={20} color="#4267B2" />
            <FaTwitter size={20} color="#1DA1F2" />
            <FaLinkedin size={20} color="#0077b5" />
            <FaInstagram size={20} color="#E4405F" />
            <FaYoutube size={20} color="#FF0000" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="linksContainer1" style={styles.linksContainer1}>
          <div style={styles.linkSection}>
            <h4 style={styles.linkTitle}>About</h4>
            <ul style={styles.links}>
              <li style={styles.linkItem}>About Us</li>
              <li style={styles.linkItem}>Find Store</li>
              <li style={styles.linkItem}>Categories</li>
              <li style={styles.linkItem}>Blogs</li>
            </ul>
          </div>

          <div style={styles.linkSection}>
            <h4 style={styles.linkTitle}>Information</h4>
            <ul style={styles.links}>
              <li style={styles.linkItem}>Help Center</li>
              <li style={styles.linkItem}>Money Refund</li>
              <li style={styles.linkItem}>Shipping</li>
              <li style={styles.linkItem}>Contact Us</li>
            </ul>
          </div>

          <div style={styles.linkSection}>
            <h4 style={styles.linkTitle}>For Users</h4>
            <ul style={styles.links}>
              <li style={styles.linkItem}>Login</li>
              <li style={styles.linkItem}>Register</li>
              <li style={styles.linkItem}>Settings</li>
              <li style={styles.linkItem}>My Orders</li>
            </ul>
          </div>
        </div>

        {/* App Links */}
        <div style={styles.appLinks}>
          <h4 style={styles.linkTitle}>Get App</h4>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/App_Store_(iOS).svg"
            alt="App Store"
            width="120"
            style={{ marginRight: "10px" }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            width="135"
          />
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div style={styles.footerBottom}>
        © 2023 Ecommerce. <span style={{ marginLeft: "10px" }}>🌐 English</span>
      </div>
    </footer>
  );
};

const mediaQueryStyles = `
  @media (max-width: 768px) {
    .linksContainer1 {
       width:320px
    }
}
`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueryStyles;
document.head.appendChild(styleSheet);

export default Footer;
