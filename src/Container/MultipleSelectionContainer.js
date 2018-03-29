import React, { Component }  from 'react';

export default class MultipleSelection extends Component {
	constructor(props) {
		super(props);
	}

	submitMessage = (label, value) => {
		if (this.props.onClick)
			this.props.onClick(label, value)
	}

	render() {
		return(
            <section className="kdabra-app-response-container">{
            this.props.responseExpected.options.map((element, index) => {
                return (
                <div
                    key={'flat_selector_article_'+index}
                    className={'selector' + ' selector-' + element.theme}
                    onClick={() => this.submitMessage(element.label, element.value)}
                >
                    <p>
                        {element.label}
                        </p>
                </div>
                )
            })
            }
            </section>
		);
	}
}