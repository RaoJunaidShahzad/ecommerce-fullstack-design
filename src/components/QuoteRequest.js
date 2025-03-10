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
    rightSection1: {
      flex: "1",
      width: "300px",
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
      width: "85%",
    },
    input1: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "41%",
    },
    textarea: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "85%",
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
      <div className="rightSection1" style={styles.rightSection1}>
        <h3>Send quote to suppliers</h3>
        <div style={styles.formGroup}>
          <input
            className="inp"
            type="text"
            placeholder="What item you need?"
            style={styles.input}
          />
          <textarea
            placeholder="Type more details"
            style={styles.textarea}
          ></textarea>
          <div style={styles.row}>
            <input type="number" placeholder="Quantity" style={styles.input1} />
            <select style={styles.input1}>
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

const mediaQueryStyles = `
  @media (max-width: 768px) {
    .rightSection1 {
        display: flex;
        flex-direction: column;
       padding: 10px;
       width:240px
    }
    .inp{
       width: 85%;
    }
}
`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueryStyles;
document.head.appendChild(styleSheet);

export default QuoteRequest;
