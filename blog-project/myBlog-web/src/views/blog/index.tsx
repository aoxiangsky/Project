import React from "react";
import "./index.scss"
import ArticleCard from "./components/ArticleCard/index"

const Blog: React.FC = props => {
  return <div className="blog-main-wrap"><ArticleCard/></div>;
};

export default Blog;
