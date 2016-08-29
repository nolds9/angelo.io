import React, { Component } from 'react'

class Playlists extends Component {
  render() {
    let list = ""
    let { onSetCurrent, results } = this.props
    if (!results) {
       list = <p>No Playlists found yet...</p>
    } else {
        list = results.map( (result, i) => {
        return (
          <div key={i}>
            <p>{result.name} <button onClick={ e => onSetCurrent(i) }>Play</button></p>
          </div>
        )
      })
    }

    return (
      <div>
        {list}
      </div>
    )
  }
}

export default Playlists
