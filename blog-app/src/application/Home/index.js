import React from "react";
import { renderRoutes } from "react-router-config";
import { BlogWrapper, Top, TopWrapper, FuncSelect, Tab } from "./style";

function Home(props) {
  const { route } = props;
  return (
    <BlogWrapper>
      <Top>
        <TopWrapper>
          <div>最新</div>
          <div>技术</div>
          <div>生活</div>
          <div>音乐</div>
          <div>react</div>
          <div>vue</div>
          <div>webpack</div>
          <div>nodejs</div>
          <div>gulp</div>
        </TopWrapper>
        <FuncSelect>
          <span className="iconfont">&#xe69f;</span>
        </FuncSelect>
      </Top>
    
      {renderRoutes(route.routes)}
      
      <Tab>
        <div>
          <span className="iconfont">&#xe69f;</span>
        </div>
        <div>
          <span className="iconfont">&#xe69f;</span>
        </div>
        <div>
          <span className="iconfont">&#xe69f;</span>
        </div>
        <div>
          <span className="iconfont">&#xe69f;</span>
        </div>
        <div>
          <span className="iconfont">&#xe69f;</span>
        </div>
      </Tab>
    </BlogWrapper>
  );
}

export default React.memo(Home);
