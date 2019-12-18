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
    render() {
        return (
            <>
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        onChange={this.handleChange}
                        
                        />
                    <input
                        type="text"
                        className="search-btn"
                        />
                </div>
            </>
        )
    }
}

export default Autocomplete;