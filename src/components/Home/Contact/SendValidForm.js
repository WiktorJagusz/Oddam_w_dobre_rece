import React, { Component } from "react";


class SendValidForm extends Component{
    componentDidMount(){
        const { name, email, message} = this.props;

        const data = { name: name, email: email, message: message };

        fetch('https://fer-api.coderslab.pl/v1/portfolio/contactgit', {
            method: 'POST',
            headers: {
                'cors': 'no-cors',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => console.log(resp))
    }
    render(){
        console.log('sendform')
        return(
            <span className='formSuccesfull'>Wiadomość została wysłana! Wkrótce się skontaktujemy.</span>
        )
    }
}

export default SendValidForm;