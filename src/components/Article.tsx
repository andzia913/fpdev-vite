
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
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition h-full">

      {/* IMAGE */}
      <img
        src={imgUrl}
        alt={alt}
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-6 text-white">

        <h3 className="text-base md:text-xl font-semibold mb-2">
          {date}
        </h3>

        <p className="text-xs md:text-sm opacity-90 mb-3 md:mb-4 line-clamp-2">
          {text}
        </p>

        <button
          onClick={() => handleActiveArticle(date)}
          className="self-start text-[10px] md:text-xs uppercase tracking-wide px-3 py-1.5 md:px-4 md:py-2 rounded-md 
          bg-white text-black hover:bg-[var(--color-primary)] hover:text-white transition"
        >
          Dowiedz się więcej
        </button>

      </div>

      {/* HOVER */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
};

export default Article;