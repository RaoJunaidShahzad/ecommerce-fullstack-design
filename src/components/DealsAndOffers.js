import React, { useState, useEffect } from "react";

const DealsAndOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#f8fafc",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    countdownSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px",
    },
    countdownBox: {
      display: "flex",
      gap: "8px",
      fontSize: "16px",
    },
    timeBlock: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "5px",
      textAlign: "center",
    },
    productGrid: {
      display: "flex",
      gap: "20px",
    },
    productCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "10px",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    productImage: {
      width: "80px",
      height: "80px",
      objectFit: "contain",
    },
    discountTag: {
      backgroundColor: "#ff4d4f",
      color: "#fff",
      padding: "4px 8px",
      borderRadius: "4px",
      marginTop: "5px",
    },
  };

  const products = [
    { name: "Smart watches", discount: "-25%", image: "smartwatch.png" },
    { name: "Laptops", discount: "-15%", image: "laptop.png" },
    { name: "GoPro cameras", discount: "-40%", image: "gopro.png" },
    { name: "Headphones", discount: "-25%", image: "headphones.png" },
    { name: "Canon cameras", discount: "-25%", image: "canon.png" },
  ];

  return (
    <div style={styles.container}>
      {/* Countdown Timer Section */}
      <div style={styles.countdownSection}>
        <h3>Deals and offers</h3>
        <p>Hygiene equipments</p>
        <div style={styles.countdownBox}>
          <div style={styles.timeBlock}>{timeLeft.days} Days</div>
          <div style={styles.timeBlock}>{timeLeft.hours} Hour</div>
          <div style={styles.timeBlock}>{timeLeft.minutes} Min</div>
          <div style={styles.timeBlock}>{timeLeft.seconds} Sec</div>
        </div>
      </div>

      {/* Product Grid Section */}
      <div style={styles.productGrid}>
        {products.map((product, index) => (
          <div key={index} style={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.productImage}
            />
            <p>{product.name}</p>
            <div style={styles.discountTag}>{product.discount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsAndOffers;
