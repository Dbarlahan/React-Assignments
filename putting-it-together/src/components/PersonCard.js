import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increaseAge: this.props.age,
        };
    }

    render() {
        const { lastName, firstName, age, hairColor } = this.props;
        return(
            <div className="container">
                <h1>{ lastName }, { firstName }</h1>
                <p>Age: { this.state.increaseAge }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick = { () => this.setState({ increaseAge: this.state.increaseAge + 1 })}>
                Birthday Button for { firstName } { lastName }
                </button>
            </div>
        );
    }
}

export default PersonCard;