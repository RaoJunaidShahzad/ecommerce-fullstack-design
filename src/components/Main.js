import React from "react";
import CategorySidebar from "./mainpage/CategorySidebar";
import DealsAndOffers from "./mainpage/DealsAndOffers";
import HomeAndOutdoor from "./mainpage/HomeAndOutdoor";
import ElectronicAndGadget from "./mainpage/ElectronicAndGadget";
import QuoteRequest from "./mainpage/QuoteRequest";
import RecommendedItems from "./mainpage/RecommendedItems";
import ExtraServices from "./mainpage/ExtraServices";
import SuppliersByRegion from "./mainpage/SuppliersByRegion";
import NewsletterSubscription from "./mainpage/NewsletterSubscription";

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
