import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    return (
      <div>
          <h1>mera naav {this.props.name} aahe ani maze vay {this.props.age} aahe</h1>
      </div>
    )
  }
}
