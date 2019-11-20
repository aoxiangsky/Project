import React from 'react'
import { Row, Col } from 'antd'
import NavLeft from '@components/NavLeft/index'
import Header from '@components/Header/index'
import './index.less'

function Home() {
  return (
    <Row className="home">
      <Col span={4} className="home-nav">
        <NavLeft />
      </Col>
      <Col span={20} className="home-main">
        <Header />
        <Row>
          页面主题部分
          <a href="http://www.w3school.com.cn">W3School</a>
        </Row>
      </Col>
    </Row>
  )
}

export default Home
