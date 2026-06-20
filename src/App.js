import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import ProductSection from './components/ProductSection';
import CtaBand from './components/CtaBand';
import AnalyticsSection from './components/AnalyticsSection';
import ContentProofSection from './components/ContentProofSection';
import BottomCta from './components/BottomCta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-white text-body-text">
      <Header />
      <Hero />
      <FeatureSection />
      <ProductSection />
      <CtaBand />
      <AnalyticsSection />
      <ContentProofSection />
      <BottomCta />
      <Footer />
    </div>
  );
}

export default App;