import React, { useState } from "react";

import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";

import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

import { data } from "../data/data.json";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div className="home-page">
      <header>
        <Navbar />
        <div className="utility-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by article title or number..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>
              <CiSearch />
            </button>
          </div>
          <div className="options-container">
            <select name="filter" onChange={(e) => setFilter(e.target.value)}>
              <option value="">Filter</option>
              {data.map((data) => (
                <option key={data.partNumber} value={data.partNumber}>
                  {data.partDescription}
                </option>
              ))}
            </select>
            {/* <select name="sort">
              <option value="">Sort</option>
            </select> */}
          </div>
        </div>
      </header>
      <main>
        {data
          .filter((parts) => parts.partNumber.includes(filter))
          .map((parts) =>
            parts.articles
              .filter(
                (article) =>
                  article.articleNumber.includes(search) ||
                  article.article.includes(search)
              )
              .map((article) => (
                <Link
                  key={article.articleNumber}
                  to={`/parts/${parts.partNumber}/articles/${article.articleNumber}`}
                >
                  <ArticleCard data={article} />
                </Link>
              ))
          )}
      </main>
    </div>
  );
};

export default Home;
