import React from 'react';
import Card from './Card';
import Characters from './Card';


class CardContainer extends React.Component  {
    constructor() {
        super();
        this.state = {
            birthYear: "",
            Gender: "",
            mass: "",
            hairColor: "",
            eyeColor: "",
            height: ""
        };
    }

    changeHandler = event => {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };



    render() {
        return (
            <div>
                <Card />
                <Characters />
            </div>
        );
    }
}


export default CardContainer;