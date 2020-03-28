import React from "react";
import "./index.scss";
import ArticleCard from "./pages/ArticleCard/index";
import headerImg from "../../assets/img/header.jpg";

const Blog: React.FC = props => {
  return (
    <div className="blog-main-wrap">
      <section className="blog-side-menu">
        <header>
          <div className="header-img">
            <a href="#">
              <img src={headerImg} alt="#" />
            </a>
          </div>
          <div className="user-name">
            <h4>敖翔</h4>
            <div className="arrow">
            </div>
          </div>
          <div className="ersonal-signature">
            敢问天问大地
          </div>
        </header>
        <nav>博客导航</nav>
      </section>
      <section className="blog-main-content">
        <article>
          <header>主内容顶部</header>
        </article>
        <article>
          <nav>tab切换，三栏，热门文章，留言，随机文章</nav>
          <article>标签云</article>
          <nav>控制显示隐藏的文章目录栏</nav>
        </article>
      </section>
    </div>
  );
};

export default Blog;
