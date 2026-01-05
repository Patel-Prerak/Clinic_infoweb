import React from 'react';
import { Layout } from '../components/Layout';
import { HeroSection } from '../components/HeroSection';
import { FeaturesShowcase } from '../components/FeaturesShowcase';
import HowItWorks from '../components/HowItWorks';
import { PricingCards } from '../components/PricingCards';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesShowcase />
      <HowItWorks />
      <PricingCards />
      <Stats />
      <Testimonials />
    </Layout>
  );
};
