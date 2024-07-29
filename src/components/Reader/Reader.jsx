import Controls from "components/Controls";
import Progress from "components/Progress";
import Publication from "components/Publication";
import React, { Component } from "react";

class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  changeIndex = step => {
    const { publicationIndex } = this.state;
    const itemsLength = this.props.items.length;

    if (publicationIndex === 0 && step === -1) {
      return this.setState({ publicationIndex: itemsLength - 1 });
    }

    if (publicationIndex === itemsLength - 1 && step === 1) {
      return this.setState({ publicationIndex: 0 });
    }

    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + step,
    }));
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const totalItems = items.length;

    // const prevBtnDisabled = publicationIndex === 0;
    // const nextBtnDisabled = publicationIndex + 1 === totalItems;

    return (
      <div>
        <Controls
          changeIndex={this.changeIndex}

          // prevBtnDisabled={prevBtnDisabled}
          // nextBtnDisabled={nextBtnDisabled}

          // totalItems={totalItems}
          // publicationIndex={publicationIndex}
        />
        <Progress publicationIndex={publicationIndex} totalItems={totalItems} />
        <Publication item={items[publicationIndex]} />
      </div>
    );
  }
}

export default Reader;
