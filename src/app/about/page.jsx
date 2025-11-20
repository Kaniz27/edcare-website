import React from 'react';
import AboutHero from './mainabout/HeroAbout'
import DetailsAbout from './mainabout/DetailsAbout';
import AboutFeatures from './mainabout/AboutFeatures';
import StatsSection from './../components/card/page'
import TeamSections from './mainabout/TeamSections';
import TestimonialSection from './mainabout/TestimonialSection';
import FeatureSection from './mainabout/FeatureSection';

const page = () => {
  return (
    <div>
      <AboutHero></AboutHero>
      <DetailsAbout></DetailsAbout>
      <AboutFeatures></AboutFeatures>
      <StatsSection></StatsSection>
      <TeamSections></TeamSections>
      <TestimonialSection></TestimonialSection>
      <FeatureSection></FeatureSection>
    </div>
  );
};

export default page;