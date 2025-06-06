// _mock
import { _testimonials } from 'src/_mock';
//
import TestimonialEcommerce from '../../testimonial/e-commerce';
import { EcommerceHeader } from '../layout';
import {
  EcommerceLandingHero,
  EcommerceLandingCategories,
  EcommerceLandingTopProducts,
  EcommerceLandingHotDealToday,
  EcommerceLandingSpecialOffer,
  EcommerceLandingPopularProducts,
  EcommerceLandingFeaturedProducts,
} from '../landing';

// ----------------------------------------------------------------------

export default function EcommerceLandingView() {
  return (
    <>
      {/* <EcommerceHeader /> */}

      <EcommerceLandingHero />

      <EcommerceLandingCategories />

      <EcommerceLandingHotDealToday />

      <EcommerceLandingFeaturedProducts />

      <EcommerceLandingSpecialOffer />

      <EcommerceLandingPopularProducts />

      {/* <EcommerceLandingTopProducts /> */}

      <TestimonialEcommerce testimonials={_testimonials} />
    </>
  );
}
