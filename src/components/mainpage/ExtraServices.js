import React from "react";

const styles = {
  container: {
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    maxWidth: "1000px",
    margin: "auto",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
  },
  card: {
    position: "relative",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    overflow: "hidden",
    transition: "transform 0.3s",
  },
  cardHover: {
    transform: "scale(1.05)",
  },
  image: {
    width: "100%",
    borderRadius: "6px",
  },
  icon: {
    position: "absolute",
    right: "10px",
    bottom: "10px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    padding: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "14px",
    color: "#333",
    marginTop: "8px",
    fontWeight: "bold",
  },
};

const services = [
  {
    id: 1,
    title: "Source from Industry Hubs",
    image: "service/service1.png",
    icon: "🔍",
  },
  {
    id: 2,
    title: "Customize Your Products",
    image: "service/service2.png",
    icon: "🗂️",
  },
  {
    id: 3,
    title: "Fast, reliable shipping by ocean or air",
    image: "service/service3.png",
    icon: "✈️",
  },
  {
    id: 4,
    title: "Product monitoring and inspection",
    image: "service/service4.png",
    icon: "🛡️",
  },
];

const ExtraServices = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Extra Services</h2>
      <div style={styles.grid}>
        {services.map((service) => (
          <div
            key={service.id}
            style={styles.card}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = styles.cardHover.transform)
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={service.image} alt={service.title} style={styles.image} />
            <div style={styles.icon}>{service.icon}</div>
            <p style={styles.title}>{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;
