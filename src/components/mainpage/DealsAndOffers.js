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
      width: "100%",
      gap: "10px",
      flexWrap: "nowrap",
      overflowX: "auto", // Enable horizontal scrolling
      whiteSpace: "nowrap",
      paddingBottom: "5px",
      scrollbarWidth: "none", // Hide scrollbar in Firefox
      msOverflowStyle: "none", // Hide scrollbar in IE/Edge
      scrollBehavior: "smooth", // Enables smooth scrolling
    },
    productCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "10px",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      width: "140px",
      flex: "0 0 auto", // Ensures product cards don’t shrink and stay in a row
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
    { name: "Smart watches", discount: "-25%", image: "/smartwatch.jpg" },
    { name: "Laptops", discount: "-15%", image: "laptop.jpg" },
    { name: "GoPro cameras", discount: "-40%", image: "goprocamera.jpg" },
    { name: "Headphones", discount: "-25%", image: "headphone.jpg" },
    { name: "Canon cameras", discount: "-25%", image: "canoncamera.jpg" },
    { name: "GoPro cameras", discount: "-40%", image: "goprocamera.jpg" },
    { name: "Headphones", discount: "-25%", image: "headphone.jpg" },
    { name: "Canon cameras", discount: "-25%", image: "canoncamera.jpg" },
    { name: "GoPro cameras", discount: "-40%", image: "goprocamera.jpg" },
    { name: "Headphones", discount: "-25%", image: "headphone.jpg" },
    { name: "Canon cameras", discount: "-25%", image: "canoncamera.jpg" },
  ];

  return (
    <div className="container" style={styles.container}>
      {/* Countdown Timer Section */}
      <div style={styles.countdownSection}>
        <div>
          <h3>Deals and offers</h3>
          <p>Hygiene equipments</p>
        </div>
        <div style={styles.countdownBox}>
          <div style={styles.timeBlock}>{timeLeft.days} Days</div>
          <div style={styles.timeBlock}>{timeLeft.hours} Hour</div>
          <div style={styles.timeBlock}>{timeLeft.minutes} Min</div>
          <div style={styles.timeBlock}>{timeLeft.seconds} Sec</div>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="productGrid" style={styles.productGrid}>
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

const mediaQueryStyles = `
  @media (max-width: 768px) {
    .container {
          flex-direction: column !important;
          text-align: center;
        }
  }
`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueryStyles;
document.head.appendChild(styleSheet);

export default DealsAndOffers;

// import React, { useState, useEffect, useRef } from "react";

// const DealsAndOffers = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 4,
//     hours: 13,
//     minutes: 34,
//     seconds: 56,
//   });

//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         let { days, hours, minutes, seconds } = prevTime;

//         if (seconds > 0) {
//           seconds--;
//         } else if (minutes > 0) {
//           minutes--;
//           seconds = 59;
//         } else if (hours > 0) {
//           hours--;
//           minutes = 59;
//           seconds = 59;
//         } else if (days > 0) {
//           days--;
//           hours = 23;
//           minutes = 59;
//           seconds = 59;
//         }

//         return { days, hours, minutes, seconds };
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   // Auto-scroll effect
//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     let scrollAmount = 0;

//     const autoScroll = () => {
//       if (scrollContainer) {
//         if (
//           scrollAmount >=
//           scrollContainer.scrollWidth - scrollContainer.clientWidth
//         ) {
//           scrollAmount = 0; // Reset to start
//           scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           scrollAmount += 1.5; // Adjust speed
//           scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
//         }
//       }
//     };

//     const interval = setInterval(autoScroll, 50); // Adjust timing for smoothness

//     return () => clearInterval(interval);
//   }, []);

//   const styles = {
//     container: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       backgroundColor: "#f8fafc",
//       padding: "20px",
//       borderRadius: "10px",
//       boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     },
//     countdownSection: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       padding: "10px",
//     },
//     countdownBox: {
//       display: "flex",
//       gap: "8px",
//       fontSize: "16px",
//     },
//     timeBlock: {
//       backgroundColor: "#333",
//       color: "#fff",
//       padding: "8px 12px",
//       borderRadius: "5px",
//       textAlign: "center",
//     },
//     productGrid: {
//       display: "flex",
//       width: "100%",
//       gap: "10px",
//       flexWrap: "nowrap",
//       overflowX: "auto",
//       whiteSpace: "nowrap",
//       paddingBottom: "5px",
//       scrollbarWidth: "none",
//       msOverflowStyle: "none",
//       scrollBehavior: "smooth",
//       WebkitOverflowScrolling: "touch", // Smooth scrolling for iOS
//     },
//     productCard: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       backgroundColor: "#fff",
//       padding: "10px",
//       borderRadius: "8px",
//       boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//       width: "140px",
//       flex: "0 0 auto", // Ensures product cards stay in a row
//     },
//     productImage: {
//       width: "80px",
//       height: "80px",
//       objectFit: "contain",
//     },
//     discountTag: {
//       backgroundColor: "#ff4d4f",
//       color: "#fff",
//       padding: "4px 8px",
//       borderRadius: "4px",
//       marginTop: "5px",
//     },
//   };

//   const products = [
//     { name: "Smart watches", discount: "-25%", image: "/smartwatch.jpg" },
//     { name: "Laptops", discount: "-15%", image: "laptop.jpg" },
//     { name: "GoPro cameras", discount: "-40%", image: "goprocamera.jpg" },
//     { name: "Headphones", discount: "-25%", image: "headphone.jpg" },
//     { name: "Canon cameras", discount: "-25%", image: "canoncamera.jpg" },
//     { name: "GoPro cameras", discount: "-40%", image: "goprocamera.jpg" },
//     { name: "Headphones", discount: "-25%", image: "headphone.jpg" },
//     { name: "Canon cameras", discount: "-25%", image: "canoncamera.jpg" },
//     { name: "GoPro cameras", discount: "-40%", image: "goprocamera.jpg" },
//     { name: "Headphones", discount: "-25%", image: "headphone.jpg" },
//     { name: "Canon cameras", discount: "-25%", image: "canoncamera.jpg" },
//   ];

//   return (
//     <div className="container" style={styles.container}>
//       {/* Countdown Timer Section */}
//       <div style={styles.countdownSection}>
//         <div>
//           <h3>Deals and offers</h3>
//           <p>Hygiene equipment</p>
//         </div>
//         <div style={styles.countdownBox}>
//           <div style={styles.timeBlock}>{timeLeft.days} Days</div>
//           <div style={styles.timeBlock}>{timeLeft.hours} Hour</div>
//           <div style={styles.timeBlock}>{timeLeft.minutes} Min</div>
//           <div style={styles.timeBlock}>{timeLeft.seconds} Sec</div>
//         </div>
//       </div>

//       {/* Product Grid Section */}
//       <div ref={scrollRef} className="productGrid" style={styles.productGrid}>
//         {products.map((product, index) => (
//           <div key={index} style={styles.productCard}>
//             <img
//               src={product.image}
//               alt={product.name}
//               style={styles.productImage}
//             />
//             <p>{product.name}</p>
//             <div style={styles.discountTag}>{product.discount}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Mobile responsive styles
// const mediaQueryStyles = `
//   @media (max-width: 768px) {
//     .container {
//       flex-direction: column !important;
//       text-align: center;
//     }
//   }
// `;

// // Inject styles into the document head
// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = mediaQueryStyles;
// document.head.appendChild(styleSheet);

// export default DealsAndOffers;
