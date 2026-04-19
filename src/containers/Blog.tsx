import  { useState, lazy, Suspense } from "react";
import Spinner from "../components/spinner/Spinner";
import Article from "../components/Article";
import { useNavigate } from "react-router-dom";

const ArticleContent = lazy(
  () => import("../components/ArticleContent")
);

const Blog = () => {
  const [activeArticle, setActiveArticle] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleArticleClick = (title: string) => {
    if (title === "Wykończenie pod klucz") {
      navigate("/wykonczenie-pod-klucz");
    } else if (title === "Bezpieczny kredyt 2%") {
      navigate("/bezpieczny-kredyt-polkowice");
    }else if (title === "Zmiany lokatorskie") {
      navigate("/zmiany-lokatorskie");
    } else {
      setActiveArticle(title);
    }
  };
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16" id="blog">

      {/* HEADER */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold leading-snug">
          Dowiedz się więcej <br />
          <span className="text-[var(--color-primary)]">
            i wybierz swoje mieszkanie
          </span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

  <div className="md:col-span-3 md:row-span-2 md:max-h-[588.02px] aspect-square md:aspect-auto">
    <Article
      imgUrl="/safe-credit.webp"
      alt="bezpieczny kredyt"
      handleActiveArticle={handleArticleClick}
      date="Bezpieczny kredyt 2%"
      text="Czy możesz skorzystać z dopłaty rządowej?"
    />
  </div>

  {/* SMALL ARTICLES */}
  {/* Zmieniamy grid-cols-2 na grid-cols-1, a dopiero od md: na grid-cols-2 */}
  <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6">

    <div className="aspect-square">
      <Article
        imgUrl="/progress.webp"
        alt="postępy budowy"
        handleActiveArticle={handleArticleClick}
        date="Dziennik budowy"
        text="Sprawdź postępy na budowie"
      />
    </div>

    <div className="aspect-square">
      <Article
        imgUrl="/designer.webp"
        alt="wykończenie"
        handleActiveArticle={handleArticleClick}
        date="Wykończenie pod klucz"
        text="Gotowe mieszkanie przed odbiorem"
      />
    </div>

    <div className="aspect-square">
      <Article
        imgUrl="/credit.webp"
        alt="kredyt"
        handleActiveArticle={handleArticleClick}
        date="Doradztwo kredytowe"
        text="Pomagamy w uzyskaniu kredytu"
      />
    </div>

    <div className="aspect-square">
      <Article
        imgUrl="/changing.webp"
        alt="zmiany lokatorskie"
        handleActiveArticle={handleArticleClick}
        date="Zmiany lokatorskie"
        text="Dostosuj mieszkanie do siebie"
      />
    </div>

  </div>
</div>


      {/* CONTENT */}
      <Suspense fallback={<Spinner />}>
        <ArticleContent activeArticle={activeArticle} onClose={() => setActiveArticle(null)} />
      </Suspense>

    </section>
  );
};

export default Blog;