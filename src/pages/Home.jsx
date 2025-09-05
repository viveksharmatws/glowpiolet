import React from "react";
import Hero from "../components/Hero";
import CustomizationSection from "../components/CustomizationSection";
import FeaturesSection from "../components/FeatureSection";
import ExploreSection from "../components/ExploreSection";
import GlowUpSection from "../components/GlowUpSection";
import TrialTimeline from "../components/EasyTrialSection";
import ReviewsSection from "../components/ReviewsSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <CustomizationSection />
      <FeaturesSection />
      <ExploreSection />
      <GlowUpSection />
      <TrialTimeline />
      <ReviewsSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
