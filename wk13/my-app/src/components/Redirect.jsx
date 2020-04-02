import React, { Component } from 'react'

class Redirect extends Component {
  state = {}
  handleRedirectClick = () => {
    const { history } = this.props
    if (history) history.push('/')
    else console.log('history not found in props')
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleRedirectClick()}>Redirect</button>
      </div>
    )
  }
}

export default Redirect
