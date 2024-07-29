import React, { Component } from "react";

class Publication extends Component {
  render() {
    const { title, text } = this.props.item;

    return (
      <article>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    );
  }
}

export default Publication;
