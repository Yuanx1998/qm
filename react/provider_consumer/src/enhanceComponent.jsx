import React, { Component } from 'react';

// EC = HF(WrappedComponent)

var enhanceComponent = (Component) => (
  class Enhance extends React.Component{
    render () {
      return (
        <section>
          <h1>I'm high-order component</h1>
          <Component
           {...this.state}
           {...this.props}
          />
        </section>
      )
    }
  }
)

export default enhanceComponent;