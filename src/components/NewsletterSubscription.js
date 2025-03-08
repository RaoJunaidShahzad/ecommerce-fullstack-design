import React, { useState } from "react";

const styles = {
  container: {
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "auto",
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  text: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    left: "10px",
    color: "gray",
    fontSize: "14px",
  },
  input: {
    padding: "10px 10px 10px 35px",
    border: "1px solid #ccc",
    borderRadius: "5px 0 0 5px",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 15px",
    fontSize: "14px",
    borderRadius: "0 5px 5px 0",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  message: {
    marginTop: "10px",
    fontSize: "14px",
    color: "green",
  },
};

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("Subscribed successfully!");
    setEmail(""); // Clear input after subscription
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Subscribe on our newsletter</h2>
      <p style={styles.text}>
        Get daily news on upcoming offers from many suppliers all over the world
      </p>

      <div style={styles.form}>
        <div style={styles.inputContainer}>
          <span style={styles.icon}>📧</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.currentTarget.style.background =
              styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.background = styles.button.backgroundColor)
          }
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default NewsletterSubscription;
