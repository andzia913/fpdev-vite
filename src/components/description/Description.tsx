import React, { useEffect } from 'react';
import './description.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Description = ({ title, text, img, alt }) => {
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
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="about__description-container__description">
        <div className="about__description-container__description-title">
          <img className="about__description-container__description-img" src={img} alt={alt} />
          <h2>{title}</h2>
          <div />
        </div>
        <div className="about__description-container__description-text">
          <p>{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
