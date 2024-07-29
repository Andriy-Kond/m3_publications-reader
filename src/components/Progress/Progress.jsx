import React, { Component } from "react";

class Progress extends Component {
  render() {
    const { publicationIndex, totalItems } = this.props;
    return (
      <p>
        {publicationIndex + 1}/{totalItems}
      </p>
    );
  }
}

export default Progress;
