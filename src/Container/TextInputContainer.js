import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class TextInputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            dirty: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

	componentDidMount() {
		if(this.props.principal)
			this.focusElement.focus();
	}


    handleSubmit() {
            if(this.props.closeInput) {
                var tags = [];
                tags.push({
                    tag: this.props.responseExpected.id_tag,
                    value: this.state.value
                });
                this.props.closeInput(this.state.value, this.state.value, tags);
            }
	}

    handleChange = (e) => {        
        e.preventDefault();
        var valorFinal;
        if(this.props.responseExpected.first_mask) {
            valorFinal = !this.state.dirty ? this.props.responseExpected.first_mask + e.target.value : e.target.value;
            this.setState(
                {
                    value: valorFinal,
                    dirty: true
                }
            );
        }
        else {
            this.setState(
                {
                    value: e.target.value,
                    dirty: true
                }
            );
        }
	};

    render() {
        
        const buttonStyle = {
            marginLeft : '1em'
        }
        return(
            <section className="kdabra-app-response-container">
                <TextField 
                    id= { this.props.responseExpected.value }
                    hintText= { this.props.responseExpected.mask}
                    floatingLabelText= { this.props.responseExpected.label }
                    onChange={ this.handleChange }
                    value={this.state.value}
                    ref={ (element) => { ( this.props.principal == true ) ? this.focusElement = element : '' }}
                />

                <FlatButton 
                    id= { this.props.responseExpected.value + '_button'}
                    label="Ingresar" 
                    primary={true} 
                    onClick={ this.handleSubmit }
                    style={ buttonStyle }
                    />
            </section>
        );
        
    }

}