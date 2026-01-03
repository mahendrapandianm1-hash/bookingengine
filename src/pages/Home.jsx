import React from 'react';
import {Hero} from '../components/Hero';
import {FeaturedDestination} from '../components/FeaturedDestination';
import WhyBookWithUs from '../components/WhyBookWithUs';
import PopularAmenities from '../components/PopularAmenities';
import GuestReviews from '../components/GuestReviews';
import NearbyAttractions from '../components/NearbyAttractions';
export default function Home() {
    return (
        <>
          <Hero />
          <FeaturedDestination />
          <WhyBookWithUs /> 
          <PopularAmenities />
          <GuestReviews />
          <NearbyAttractions />
        </>
    );
}