import Controls from "components/Controls";
import Progress from "components/Progress";
import Publication from "components/Publication";
import React, { Component } from "react";

const LS_KEY = "publication_reader_progressIndex";
class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  componentDidMount = () => {
    const index = Number(localStorage.getItem(LS_KEY));
    this.setState({ publicationIndex: index ? index : 0 });
  };

  setLocalStorage = index => {
    localStorage.setItem(LS_KEY, JSON.stringify(index));
  };

  changeIndex = step => {
    const { publicationIndex } = this.state;
    const itemsLength = this.props.items.length;

    if (publicationIndex === 0 && step === -1) {
      this.setState({ publicationIndex: itemsLength - 1 });
      this.setLocalStorage(itemsLength - 1);
      return;
    }

    if (publicationIndex === itemsLength - 1 && step === 1) {
      this.setState({ publicationIndex: 0 });
      this.setLocalStorage(0);
      return;
    }

    this.setState(prevState => {
      this.setLocalStorage(prevState.publicationIndex + step);

      return {
        publicationIndex: prevState.publicationIndex + step,
      };
    });
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const { title, text } = items[publicationIndex];
    const currentIndex = publicationIndex + 1;
    const totalItems = items.length;

    const prevBtnDisabled = publicationIndex === 0;
    const nextBtnDisabled = currentIndex === totalItems;

    return (
      <div>
        <Controls
          changeIndex={this.changeIndex}
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}

          // totalItems={totalItems}
          // publicationIndex={publicationIndex}
        />
        <Progress currentIndex={currentIndex} totalItems={totalItems} />
        <Publication title={title} text={text} />
      </div>
    );
  }
}

export default Reader;
