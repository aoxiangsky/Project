import React from 'react'
import './App.css'
import PropTypes from 'prop-types'

const App = props => {
  const { children } = props
  return <div className="pc-manage">{children}</div>
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired
}

export default App
