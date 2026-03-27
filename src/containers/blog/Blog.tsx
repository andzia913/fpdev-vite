import React, { useState, lazy, Suspense } from 'react';
import Article from '../../components/article/Article';
import './blog.css';
import Spinner from '../../components/spinner/Spinner';
const ArticleContent = lazy(() => import('../../components/ArticleContent/ArticleContent'));

const Blog = () => {
  const [activeArticle, setActiveArticle] = useState(null);
  const handleActiveArticle = (articleName) => {
    setActiveArticle(articleName);
  };

  return (
    <div className="fp__blog section__padding section__margin" id="blog">
      <div className="fp__blog-heading">
        <h2 className="section-heading">Dowiedz się wiecej,<br />i zdecyduj się na wymarzone mieszkanie!</h2>
      </div>
      <div className="fp__blog-container">
        <div className="fp__blog-container_groupA">
          <Article
            imgUrl="safe-credit.jpeg"
            alt="bezpieczny kredyt 2% z dopłatą"
            handleActiveArticle={handleActiveArticle}
            date="Bezpieczny kredyt 2%"
            text="Bezpieczny kredyt 2% z dopłatą rzadową, czy moge go otrzymać?"
          />
        </div>
        <div className="fp__blog-container_groupB">
          <Article
            imgUrl="progress.jpeg"
            alt="postępy na budowie apartamenty kaktusowa"
            handleActiveArticle={handleActiveArticle}
            date="Dziennik budowy"
            text="Sprawdź postępy na budowie!"
          />
          <Article
            imgUrl="designer.jpeg"
            alt="wykończenie nowych mieszkań w polkowicach pod klucz"
            handleActiveArticle={handleActiveArticle}
            date="Wykończenie wnętrz pod klucz"
            text="Projekt i realizacja jeszcze przed przeprowadzką"
          />
          <Article
            imgUrl="credit.jpeg"
            alt="doradztwo kredytowe przy zakupie mieszkań w polkowicach"
            handleActiveArticle={handleActiveArticle}
            date="Doradztwo kredytowe"
            text="Pomagamy w zdobyciu kredytu"
          />
          <Article
            imgUrl="changing.jpeg"
            alt="Zmiany lokatorskie w mieszkaniach Apartamenty Kaktusowa"
            handleActiveArticle={handleActiveArticle}
            date="Zmiany lokatorskie"
            text="Możesz wprowadzić zmiany w projekcie mieszkania"
          />
        </div>
      </div>
      <Suspense fallback={<Spinner/>}>
        <ArticleContent activeArticle={activeArticle} />
      </Suspense>
    </div>
  );
};

export default Blog;
