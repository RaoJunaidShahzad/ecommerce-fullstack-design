import React from "react";
import CategorySidebar from "../components/mainpage/CategorySidebar";
import DealsAndOffers from "../components/mainpage/DealsAndOffers";
import HomeAndOutdoor from "../components/mainpage/HomeAndOutdoor";
import ElectronicAndGadget from "../components/mainpage/ElectronicAndGadget";
import QuoteRequest from "../components/mainpage/QuoteRequest";
import RecommendedItems from "../components/mainpage/RecommendedItems";
import ExtraServices from "../components/mainpage/ExtraServices";
import SuppliersByRegion from "../components/mainpage/SuppliersByRegion";
import NewsletterSubscription from "../components/mainpage/NewsletterSubscription";

function Main() {
  return (
    <div className="Main">
      <CategorySidebar />
      <DealsAndOffers />
      <HomeAndOutdoor />
      <ElectronicAndGadget />
      <QuoteRequest />
      <RecommendedItems />
      <ExtraServices />
      <SuppliersByRegion />
      <NewsletterSubscription />
    </div>
  );
}

export default Main;
