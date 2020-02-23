import React from 'react'

export default class Test extends React.Component {
  componentDisMount() {
    this.input.focus()
  }

  render() {
    return (
      <input />
    )
  }
}
