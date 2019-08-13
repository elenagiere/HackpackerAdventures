import React from 'react';
import SubscriptionAlert from './SubscriptionAlert.jsx';
import ReactAnimatedEllipsis from 'react-animated-ellipsis';

class EmailPrompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            email: '',
            alertType: '',
            isLoading: false,
            error: null
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ fname: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            isLoading: true
        });

        return fetch('/api/add-subscriber', {
            // mode: 'no-cors',
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email_address: this.state.email,
                status : 'subscribed',
                FNAME: this.state.fname
            })
        }).then((res) => {
            return res.json();
        }).then((resJson) => {
            if (resJson.statusCode && resJson.statusCode === 200) {
                console.log('component success');
                this.setState({
                    alertType: 'success',
                    isLoading: false
                });
            } else {
                console.log('component failure');
                const err = resJson;
                this.setState({
                    alertType: 'error',
                    isLoading: false,
                    error: {
                        code: err.status,
                        type: err.title,
                        details: err.detail
                    }
                });
            }
        });
    }

    render() {
        return (
            <div>
                <form id="email-prompt" className="form-row" onSubmit={this.handleSubmit}>
                    <span className="subscribe-title">Join Our Community</span>
                    <div>
                        <input type="text" name="FNAME" className="form-item" placeholder="Name" id="FNAME" value={this.state.fname} onChange={this.handleNameChange}></input>
                    </div>
                    <div>
                        <input type="email" name="EMAIL" placeholder="email address" value={this.state.email} onChange={this.handleEmailChange} className="required email form-item form-item--email" id="email_address" />
                    </div>
                    <div className="clear">
                        <button type="submit" value="Subscribe" name="subscribe" disabled={this.state.isLoading} className="button form-item subscribe-button">
                            {this.state.isLoading ? <div className="loading-ellipsis-wrapper"><ReactAnimatedEllipsis /></div> : <p>Subscribe</p>}
                        </button>
                    </div>
                </form>
                {this.state.alertType ? <SubscriptionAlert alertType={this.state.alertType} error={this.state.error}></SubscriptionAlert> : ''}
            </div>
        );
    }
}

export default EmailPrompt;