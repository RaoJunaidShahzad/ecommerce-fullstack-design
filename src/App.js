import React from "react";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import CategorySidebar from "./components/CategorySidebar";
import DealsAndOffers from "./components/DealsAndOffers";
import HomeAndOutdoor from "./components/HomeAndOutdoor";
import QuoteRequest from "./components/QuoteRequest";
import RecommendedItems from "./components/RecommendedItems";
import ExtraServices from "./components/ExtraServices";
import SuppliersByRegion from "./components/SuppliersByRegion";
import NewsletterSubscription from "./components/NewsletterSubscription";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopNavbar />
      <CategorySidebar />
      <DealsAndOffers />
      <HomeAndOutdoor />
      <QuoteRequest />
      <RecommendedItems />
      <ExtraServices />
      <SuppliersByRegion />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
}

export default App;
