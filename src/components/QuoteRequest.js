import React from "react";

const QuoteRequest = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundImage: "url('../../public/back.jpg')", // Add your background image
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "40px",
      borderRadius: "10px",
      color: "rgb(230, 189, 189)",
      flexWrap: "wrap",
      gap: "20px",
    },
    leftSection: {
      flex: "1",
      minWidth: "250px",
    },
    rightSection: {
      flex: "1",
      minWidth: "300px",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      color: "#333",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    paragraph: {
      fontSize: "14px",
      marginTop: "10px",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginTop: "15px",
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%",
    },
    textarea: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%",
      minHeight: "80px",
    },
    row: {
      display: "flex",
      gap: "10px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      width: "100%",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <h2 style={styles.heading}>
          An easy way to send requests to all suppliers
        </h2>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      {/* Right Section - Form */}
      <div style={styles.rightSection}>
        <h3>Send quote to suppliers</h3>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="What item you need?"
            style={styles.input}
          />
          <textarea
            placeholder="Type more details"
            style={styles.textarea}
          ></textarea>
          <div style={styles.row}>
            <input type="number" placeholder="Quantity" style={styles.input} />
            <select style={styles.input}>
              <option>Pcs</option>
              <option>Kg</option>
              <option>Box</option>
            </select>
          </div>
          <button style={styles.button}>Send Inquiry</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;
