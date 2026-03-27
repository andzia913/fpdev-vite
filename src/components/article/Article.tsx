import React from 'react';
import './article.css';

const Article = ({ imgUrl, alt, date, text, handleActiveArticle }) => (
  <div className="fp__blog-container__article">
    <div className="fp__blog-container__article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="fp__blog-container__article-box">
      <h2 className="title">{date}</h2>
      <p>{text}</p>
      <a href="#articleContent">
        <button
          onClick={() => handleActiveArticle(date)}
          type="button"
        > Dowiedz się więcej
        </button>
      </a>
    </div>
  </div>
);

export default Article;
