import React from "react";

const ArticleCard = ({ data }) => {
  return (
    <div className="article-card">
      <h4>Article - {data.articleNumber}</h4>
      <h3>{data.article}</h3>
    </div>
  );
};

export default ArticleCard;
