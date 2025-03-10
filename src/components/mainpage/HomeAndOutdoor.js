import React from "react";

const HomeAndOutdoor = () => {
  const styles = {
    container: {
      display: "flex",
      backgroundColor: "#f8fafc",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    leftSection: {
      flex: "1",
      backgroundImage: "url('/homeoutdoor.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "20px",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      color: "#333",
    },
    button: {
      backgroundColor: "#fff",
      padding: "10px 15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      cursor: "pointer",
      fontWeight: "bold",
      marginTop: "10px",
    },
    rightSection: {
      flex: "2",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px",
      paddingLeft: "20px",
    },
    productCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "15px",
      borderRadius: "8px",
      textAlign: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    productImage: {
      width: "80px",
      height: "80px",
      objectFit: "contain",
    },
    priceText: {
      color: "#888",
      fontSize: "14px",
      marginTop: "5px",
    },
  };

  const products = [
    {
      name: "Soft chairs",
      price: "From USD 19",
      image: "/homeoutdoor/chair.jpg",
    },
    {
      name: "Sofa & chair",
      price: "From USD 19",
      image: "/homeoutdoor/sofa.jpg",
    },
    {
      name: "Kitchen dishes",
      price: "From USD 19",
      image: "/homeoutdoor/dishes.jpg",
    },
    {
      name: "Smart watches",
      price: "From USD 19",
      image: "/homeoutdoor/watch.jpg",
    },
    {
      name: "Kitchen mixer",
      price: "From USD 100",
      image: "/homeoutdoor/mixer.jpg",
    },
    {
      name: "Blenders",
      price: "From USD 39",
      image: "/homeoutdoor/blender.jpg",
    },
    {
      name: "Home appliance",
      price: "From USD 19",
      image: "/homeoutdoor/appliance.jpg",
    },
    {
      name: "Coffee maker",
      price: "From USD 10",
      image: "/homeoutdoor/coffee.jpg",
    },
  ];

  return (
    <div className="container" style={styles.container}>
      {/* Left Section */}
      <div className="leftSection" style={styles.leftSection}>
        <h2>Home and outdoor</h2>
        <button className="dispnone" style={styles.button}>
          Source now
        </button>
      </div>

      {/* Right Section - Products */}
      <div className="rightSection" style={styles.rightSection}>
        {products.map((product, index) => (
          <div className="productCard" key={index} style={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.productImage}
            />
            <p>{product.name}</p>
            <p style={styles.priceText}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mediaQueryStyles = `
  @media (max-width: 768px) {
  .container {
    flex-direction: column !important;
    text-align: center;
  }

  .leftSection {
    flex-direction: column !important;
    text-align: center;
    background-image: none !important;
    background-color: transparent !important;
  }

  .dispnone {
    display: none !important;
  }

  .rightSection {
    display: flex;
    flex: 1;
    width: 100%;
    gap: 10px;
    flex-wrap: nowrap;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 5px;
    scrollbar-width: none; /* Hide scrollbar in Firefox */
    -ms-overflow-style: none; /* Hide scrollbar in IE/Edge */
    scroll-behavior: smooth; /* Enables smooth scrolling */
  }

  /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
  .rightSection::-webkit-scrollbar {
    display: none;
  }
    .productCard {
    flex: 0 0 auto; /* Prevents shrinking or wrapping */
    width: 140px; /* Fixed width for each product */
  }
}

`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueryStyles;
document.head.appendChild(styleSheet);

export default HomeAndOutdoor;
