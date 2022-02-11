import React, { Component } from 'react';
import moment from 'moment'
import $ from 'jquery'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: moment(new Date()).format("hh:mm:ss"),
      number: "",
      _table: []
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: moment(new Date()).format("hh:mm:ss")
      })
    }, 1000);
  }

  getTable = (num) => {
    if (!num) return;
    let abc = "";
    for (let i = 1; i < 21; i++) {
      abc = num * i
      $(`<div> <strong> ${num} * ${i} = ${abc} </strong> </div>`).appendTo("div#tabledata");
      $('#tabledata').css("border", "1px solid red")
      $('#tabledata').css("border-radius", "25px")
      $('#tabledata').css("padding", "5px")
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.number !== this.state.number) {
      $("#tabledata").empty();
      $('#tabledata').css("border", "")
      $('#tabledata').css("border-radius", "")
      $('#tabledata').css("padding", "")
      this.getTable(this.state.number)
    }
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIExCViuHkAu5oxDi6H9JlEoYHr3nXvWN6zw&usqp=CAU" width="30" height="40" className="d-inline-block align-top" alt="" />
            &nbsp; <small ><strong>Project</strong></small>
          </a>
          <h5 style={{ color: "Highlight" }}><strong>Table Project</strong></h5>
          <form className="form-inline my-2 my-lg-0">
            <h5 className=" my-2 my-sm-0">{this.state.date}</h5>
          </form>
        </nav>
        <marquee behavior="alternate" scrollamount="10"><strong style={{ color: "red" }}> This is my first project which is made by me with the helf of my brother.</strong></marquee><br /><br />
        <div style={{ textAlign: "center" }}>
          <input className='form-control-sm' placeholder='Enter Your Number' onKeyDown={(evt) =>
            ["e", "E", "+"].includes(evt.key) && evt.preventDefault()} type="number" onChange={(e) =>
              this.setState({
                ...this.state,
                number: e.target.value
              })
            } />
        </div>  <br />
        <div className='tablefordata'>
          <div id='tabledata' >
          </div>
        </div>
      </>
    )
  }
}

