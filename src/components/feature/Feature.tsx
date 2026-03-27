import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import './feature.css';
import { useInView } from 'react-intersection-observer';

const enterFromRight = {
  visible: { x: 0, transition: { duration: 1 } },
  hidden: { x: (window.innerWidth * 0.87) },
};
console.log(window.innerWidth, 'xx');

const Feature = ({ title, text, img, imgsmall, alt }) => {
  const [elementPosition, setElementPosition] = useState(0);
  const [currEL, setCurrEl] = useState(null);
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);


  return (
    <motion.div
      ref={ref}
      variants={enterFromRight}
      initial="hidden"
      animate={control}
      className="fp__features_element"
    >
          <picture>
          <source srcSet={imgsmall} media="(max-width: 450px)" />
          <source srcSet={img} />
          <img className="fp__features_element-img" alt={alt} />
        </picture>
      <h2>{title}</h2>
      <p>{text}</p>
      <button type="button" />
    </motion.div>
  );
};

export default Feature;

