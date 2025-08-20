import "./App.css";
import CustomizationSection from "./components/CustomizationSection";
import FeaturesSection from "./components/FeatureSection";
import GlowUpSection from "./components/GlowUpSection";
import Hero from "./components/Hero";
import "./index.css";
import TrialTimeline from "./components/EasyTrialSection";
import ReviewsSection from "./components/ReviewsSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import OurCustomers from "./components/OurCustomers";
import ExploreSection from "./components/ExploreSection";

function App() {
  return (
    <>
      <Hero />
      <CustomizationSection />
      <FeaturesSection />
      <ExploreSection />
      <GlowUpSection />
      <TrialTimeline />
      <ReviewsSection />
      <FaqSection />
      <Footer />
    </>
  );
}

export default App;
