import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

import { data } from "../data/data.json";

const Article = () => {
  const { partNumber, articleNumber } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    data
      .filter((parts) => parts.partNumber === partNumber)
      .map((parts) => {
        parts.articles
          .filter((article) => article.articleNumber === articleNumber)
          .map((article) => setArticle(article));
      });
  }, [partNumber, articleNumber]);
  return (
    <div className="article-page">
      {article ? (
        <main>
          <div>
            <h1>Article {articleNumber}</h1>
            <h1>Part {partNumber}</h1>
          </div>
          <h1>{article.article}</h1>
          <p>{article.articleDescription}</p>

          <span>Here's a simplified breakdown of the statement:</span>
          <p>{article.articleDescription}</p>
        </main>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Article;
