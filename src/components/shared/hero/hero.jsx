import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Hero = ({ className, title, description, illustration }) => (
  <section className={className}>
    <Container className="grid xl:gap-x-8 lg:grid-cols-2">
      <div className="flex-1 lg:max-w-[490px] xl:max-w-[592px]">
        <Heading tag="h1" size="lg">
          {title}
        </Heading>
        <div
          className="mt-5 space-y-5 leading-relaxed text-md md:text-lg with-link-primary md:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="relative flex justify-center">
        <img
          className="flex-1 w-full my-10 lg:-right-10 left-auto xl:left-0 md:max-w-[720px] lg:w-[580px] lg:absolute lg:top-0  md:my-14 lg:my-0 xl:w-max"
          src={illustration}
          alt=""
        />
      </div>
    </Container>
  </section>
);

Hero.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  illustration: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  className: null,
};

export default Hero;
