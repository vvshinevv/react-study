import React, { Component } from "react";

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNinja(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">Name: </label>
        <input type="text" id="name" onChange={this.handleChange} />
        <label htmlFor="">Age: </label>
        <input type="text" id="age" onChange={this.handleChange} />
        <label htmlFor="">Belt: </label>
        <input type="text" id="belt" onChange={this.handleChange} />
        <button>submit</button>
      </form>
    );
  }
}

export default AddNinja;
