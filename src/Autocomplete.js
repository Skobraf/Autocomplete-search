import React, { Component } from 'react';

class Autocomplete extends Component {
    state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: ''
    }
    handleChange = (e) => {
    const { options } = this.props;
    const userInput = e.target.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );  
        this.setState({
        filteredOptions,
        showOptions: true,
        userInput
        });
    }
    onClick = (e) => {
        this.setState({
          activeOption: 0,
          filteredOptions: [],
          showOptions: false,
          userInput: e.currentTarget.innerText
        });
      };
    onKeyDown = (e) => {
        const { activeOption, filteredOptions } = this.state;
        if (e.keyCode === 13) { // ENTER KEY.
          this.setState({
            activeOption: 0,
            showOptions: false,
            userInput: filteredOptions[activeOption]
          });
        } else if (e.keyCode === 38) { // UP ARROW.
          if (activeOption === 0) {
            return;
          }
          this.setState({ activeOption: activeOption - 1 });
        } else if (e.keyCode === 40) { // DOWN ARROW.
          if (activeOption === filteredOptions.length - 1) {
            return;
          }
          this.setState({ activeOption: activeOption + 1 });
        }
      };
    render() {
        const {
            handleChange,
            onClick,
            onKeyDown,
      
            state: { activeOption, filteredOptions, showOptions, userInput }
          } = this;
          let optionList;
          if (showOptions && userInput) {
            if (filteredOptions.length) {
              optionList = (
                <ul className="options">
                  {filteredOptions.map((optionName, index) => {
                    let className;
                    if (index === activeOption) {
                      className = 'option-active';
                    }
                    return (
                      <li className={className} key={optionName} onClick={onClick}>
                        {optionName}
                      </li>
                    );
                  })}
                </ul>
              );
            } else {
              optionList = (
                <div className="no-options">
                  <em>No Option!</em>
                </div>
              );
            }
          }
        return (
            <>
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        onChange={handleChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                        />
                    <input
                        type="text"
                        className="search-btn"
                        />
                </div>
                {optionList}
            </>
        )
    }
}

export default Autocomplete;