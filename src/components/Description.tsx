import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Description = ({ title, text, img, alt }: { title: string; text: string; img: string; alt: string }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) control.start("visible");
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={control}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <div className="flex gap-6 items-start">

        {/* IMAGE */}
        <img
          src={img}
          alt={alt}
          className="w-20 h-20 object-cover rounded-md flex-shrink-0"
        />

        {/* CONTENT */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
            {title}
          </h3>

          <p className="text-[var(--color-text-muted)] leading-relaxed">
            {text}
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default Description;