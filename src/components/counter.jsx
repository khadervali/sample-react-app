import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("Props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncremant(this.props.counter)}
          className="btn btn-sm btn-secondary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-sm btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = product => {
    console.log("Increment Clicked", product, this.state);
    this.setState({ value: this.props.counter.value + 1 });
  };
}

export default Counter;
