import React from "react";

type Props = {
  imgUrl: string;
  alt: string;
  date: string;
  text: string;
  handleActiveArticle: (name: string) => void;
};

const Article = ({
  imgUrl,
  alt,
  date,
  text,
  handleActiveArticle,
}: Props) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition h-full mx-4 md:mx-0">

      {/* IMAGE */}
      <img
        src={imgUrl}
        alt={alt}
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">

        <h3 className="text-lg md:text-xl font-semibold mb-2">
          {date}
        </h3>

        <p className="text-sm opacity-90 mb-4 line-clamp-2">
          {text}
        </p>

        <button
          onClick={() => handleActiveArticle(date)}
          className="self-start text-xs uppercase tracking-wide px-4 py-2 rounded-md 
          bg-white text-black hover:bg-[var(--color-primary)] hover:text-white transition"
        >
          Dowiedz się więcej
        </button>

      </div>

      {/* HOVER EFFECT */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />

    </div>
  );
};

export default Article;