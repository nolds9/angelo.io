import React, { Component } from 'react'

class Results extends Component {
  render() {
    let results = ""
    if (!this.props.results) {
       results = <p>No Results Yet</p>
    } else {
        results = this.props.results.map( (result, i) => {
        return <p key={i} >{result.name}</p>
      })
    }

    return (
      <div>
        {results}
      </div>
    )
  }
}

export default Results;
