import styled from "styled-components";
import style from "../../assets/global-style";

export const BlogWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2px 8px;
  height: 34px;
  font-size: 14px;
  background: ${style["theme-color"]};
`;

export const TopWrapper = styled.div`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  width: 85%;
  & > div {
    padding: 0 12px;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }
`;

export const FuncSelect = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > span {
    font-size: 20px;
    &.iconfont {
      color: #f1f1f1;
      font-size: 20px;
    }
  }
`;

export const Tab = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  background: ${style["theme-color"]};
  & > div {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > span {
      font-size: 25px;
      color: #f1f1f1;
    }
  }
`;
