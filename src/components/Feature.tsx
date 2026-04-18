import { motion } from "framer-motion";

const Feature = ({ title, text, img, alt, index }: { title: string; text: string; img: string; alt: string; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`group relative w-full h-[50vh] min-h-[400px] overflow-hidden flex ${
        isEven ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* IMAGE */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
        />
      </div>

      {/* OVERLAY COLOR */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-[var(--color-primary)]/60 transition duration-500" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-end w-full px-8 pb-10">

        <div className="max-w-lg">

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h3>

          <p className="text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 transition duration-500">
            {text}
          </p>

        </div>

      </div>
    </motion.div>
  );
};

export default Feature;