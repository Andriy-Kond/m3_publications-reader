import Controls from "components/Controls";
import Progress from "components/Progress";
import Publication from "components/Publication";
import React, { Component } from "react";

class Reader extends Component {
  render() {
    return (
      <div>
        <Controls></Controls>
        <Progress></Progress>
        <Publication></Publication>
      </div>
    );
  }
}

export default Reader;
