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
      backgroundImage: "url('/sofa-bg.jpg')",
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
    { name: "Soft chairs", price: "From USD 19", image: "chair.png" },
    { name: "Sofa & chair", price: "From USD 19", image: "sofa.png" },
    { name: "Kitchen dishes", price: "From USD 19", image: "dishes.png" },
    { name: "Smart watches", price: "From USD 19", image: "watch.png" },
    { name: "Kitchen mixer", price: "From USD 100", image: "mixer.png" },
    { name: "Blenders", price: "From USD 39", image: "blender.png" },
    { name: "Home appliance", price: "From USD 19", image: "appliance.png" },
    { name: "Coffee maker", price: "From USD 10", image: "coffee.png" },
  ];

  return (
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <h2>Home and outdoor</h2>
        <button style={styles.button}>Source now</button>
      </div>

      {/* Right Section - Products */}
      <div style={styles.rightSection}>
        {products.map((product, index) => (
          <div key={index} style={styles.productCard}>
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

export default HomeAndOutdoor;
