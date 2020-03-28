import React, { Component } from "react";
import "./index.scss";
import "@/style/markdown.scss";
import "@/style/highlight.scss";
import marked from "marked";
import hljs from "highlight.js";
import Tocify from "../../components/ArticleMenu";

interface Iprops {}

interface Istate {
  markdownContent: string;
  tocify: any;
}

class ArticleCard extends Component<Iprops> {
  public state: Istate = {
    markdownContent: "",
    tocify: new Tocify()
  };

  componentDidMount() {
    let that = this;
    const renderer = new marked.Renderer();
    renderer.heading = function(text, level, raw) {
      const anchor = that.state.tocify.add(text, level);
      return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };
    marked.setOptions({
      renderer: renderer,
      gfm: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      }
    });

    // const testMark = require("../../../../assets/vue.md");
    // const testMark = require("../../../../assets/sessionStorage.md");
    const testMark = require("../../../../assets/reactbasis.md");
    // const testMark = require("../../../../assets/for.md");
    // const testMark = require("../../../../assets/js.md");
    // const testMark = require("../../../../assets/node.md");
    fetch(testMark)
      .then(response => {
        // console.log(response);
        return response.text();
      })
      .then(text => {
        // console.log(text);
        this.setState({
          markdownContent: marked(text)
        });
      });
  }

  render() {
    return (
      <div className="article-main-wrap">
        <div className="article-card-wrap">
          <article
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: this.state.markdownContent }}
          ></article>
        </div>
        <div className="article-menu-wrap">
          <aside>
            {this.state.tocify && this.state.tocify.render()}
          </aside>
        </div>
      </div>
    );
  }
}

export default ArticleCard;
