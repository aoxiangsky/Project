import React from 'react'
import { Row, Col } from 'antd'
import NavLeft from '@components/NavLeft/index'
import Header from '@components/Header/index'
import './index.less'

import Test from '../main/index'

function Home() {
  return (
    <Row className="home">
      <Col span={4} className="home-nav">
        <NavLeft />
      </Col>
      <Col span={20} className="home-main">
        <Header />
        <Row className="home-content" />
      </Col>
    </Row>
  )
}

export default Home
