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
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
  },
  supplier: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    borderRadius: "6px",
    transition: "background 0.3s",
  },
  supplierHover: {
    backgroundColor: "#f5f5f5",
  },
  flag: {
    width: "20px",
    height: "15px",
    borderRadius: "2px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  country: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  website: {
    fontSize: "12px",
    color: "#777",
  },
};

const suppliers = [
  { country: "Arabic Emirates", domain: "shopname.ae", flag: "/flags/uae.png" },
  { country: "Australia", domain: "shopname.ae", flag: "/flags/australia.png" },
  { country: "United States", domain: "shopname.ae", flag: "/flags/usa.png" },
  { country: "Russia", domain: "shopname.ru", flag: "/flags/russia.png" },
  { country: "Italy", domain: "shopname.it", flag: "/flags/italy.png" },
  { country: "Denmark", domain: "denmark.com.dk", flag: "/flags/denmark.png" },
  { country: "France", domain: "shopname.com.fr", flag: "/flags/france.png" },
  { country: "China", domain: "shopname.ae", flag: "/flags/china.png" },
  { country: "Great Britain", domain: "shopname.co.uk", flag: "/flags/uk.png" },
];

const SuppliersByRegion = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Suppliers by region</h2>
      <div style={styles.grid}>
        {suppliers.map((supplier, index) => (
          <div
            key={index}
            style={styles.supplier}
            onMouseOver={(e) =>
              (e.currentTarget.style.background =
                styles.supplierHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <img
              src={supplier.flag}
              alt={supplier.country}
              style={styles.flag}
            />
            <div style={styles.textContainer}>
              <span style={styles.country}>{supplier.country}</span>
              <span style={styles.website}>{supplier.domain}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliersByRegion;
