import React from "react";

const styles = {
  container: {
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    maxWidth: "1000px",
    margin: "auto",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.2s",
  },
  cardHover: {
    transform: "scale(1.05)",
  },
  image: {
    width: "100%",
    borderRadius: "6px",
  },
  price: {
    fontWeight: "bold",
    marginTop: "8px",
  },
  title: {
    fontSize: "14px",
    color: "#555",
    marginTop: "5px",
  },
};

const products = [
  { id: 1, name: "T-shirt for men", price: "$10.30", image: "/tshirt.jpg" },
  { id: 2, name: "Jeans shorts blue", price: "$10.30", image: "/jeans.jpg" },
  { id: 3, name: "Brown winter coat", price: "$12.50", image: "/coat.jpg" },
  { id: 4, name: "Leather Wallet", price: "$99.00", image: "/wallet.jpg" },
  { id: 5, name: "Headset for gaming", price: "$8.99", image: "/headset.jpg" },
  { id: 6, name: "Jeans shorts blue", price: "$10.30", image: "/jeans.jpg" },
  { id: 7, name: "Brown winter coat", price: "$12.50", image: "/coat.jpg" },
  { id: 8, name: "Leather Wallet", price: "$99.00", image: "/wallet.jpg" },
  { id: 9, name: "Headset for gaming", price: "$8.99", image: "/headset.jpg" },
  {
    id: 10,
    name: "Smartwatch silver",
    price: "$10.30",
    image: "/smartwatch.jpg",
  },
];

const RecommendedItems = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Recommended Items</h2>
      <div style={styles.grid}>
        {products.map((item) => (
          <div
            key={item.id}
            style={styles.card}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = styles.cardHover.transform)
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={item.image} alt={item.name} style={styles.image} />
            <p style={styles.price}>{item.price}</p>
            <p style={styles.title}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
