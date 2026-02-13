
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MinimalView from './components/MinimalView';
import LeadGenView from './components/LeadGenView';
import BusinessView from './components/BusinessView';
import VersionSwitcher, { WebsiteVersion } from './components/VersionSwitcher';

const App: React.FC = () => {
  const [version, setVersion] = useState<WebsiteVersion>('default');

  const renderVersion = () => {
    switch (version) {
      case 'minimal':
        return <MinimalView />;
      case 'lead-gen':
        return <LeadGenView />;
      case 'business':
        return <BusinessView />;
      default:
        return (
          <>
            <Navbar />
            <main>
              <Hero />
              <Services />
              <About />
              <WhyChooseUs />
              <Pricing />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {renderVersion()}
      <VersionSwitcher currentVersion={version} setVersion={setVersion} />
    </div>
  );
};

export default App;
