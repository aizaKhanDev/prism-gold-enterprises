import HeroSlider from '../components/HeroSlider';
import HeroSlider2 from '../components/HeroSlider2';
import TrustReasonsSection from '@/components/TrustReasonsSection';
import ServiceOfferingSection from '@/components/ServiceOfferingSection';
import ITExpertSection from '@/components/ITExpertSection';
import ConstructionExpertSection from '@/components/ConstructionExpertSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import GetInTouchModern from '@/components/GetInTouchModern';

import React from 'react';
import ITexpert from '@/components/ITexpert';

export default function Home() {
  return (
    <>
     
      <HeroSlider />
      <TrustReasonsSection />
      <ServiceOfferingSection />
      <ITExpertSection />
      <ConstructionExpertSection />
      <ITexpert />
      <WhyChooseUsSection />
      <GetInTouchModern />
    </>
  );
} 