import React, { Component } from 'react'

class Loading extends Component {
  constructor(props) {
    super(props)
    this.originalText = props.text;
    this.state = {
      text: props.text
    }
  }
  componentDidMount() {
    const stopper = this.originalText + '...';
    this.interval = setInterval( () => {
      if (this.state.text === stopper){
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + "."
        })
      }
    }, this.props.speed)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return(
      <div>
        <p style={style}>{this.state.text}</p>
      </div>
    )
  }
}

export default Loading


const style = {
  fontSize: "22px"
}
