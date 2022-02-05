import React, { Component } from 'react';
import moment from 'moment'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: moment(new Date()).format("hh:mm:ss")
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: moment(new Date()).format("hh:mm:ss")
      })
    }, 1000);
  }

  render() {
    return <div style={{ textAlign: "center",color:"brown" }}>
      <h1><strong>Hritik{this.state.date}</strong></h1>
    </div>;
  }
}

