import React, { Component } from 'react';
import { InputGroup, Button, FormGroup, Intent, Toaster, Position } from "@blueprintjs/core";
import logo from '../../logo.png';
import { connect } from 'react-redux'
import { loginAction } from '../../store/actions/loginActions'
import { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor() {
		super()
		this.state = {
			user: '',
			password: '',
			loading: false
		}
	}
	refHandlers = {
		toaster: (ref) => this.toaster = ref,
	};

	login = (e) => {
		e.preventDefault();
		this.setState({ loading: true })
		this.props.loginAction(this.state)
		this.setState({ loading: false })
		const loginResponse = this.props.user.response;

		if (loginResponse) {
			if (loginResponse.data.status === 200) {
				localStorage.setItem('name', loginResponse.data.name)
				localStorage.setItem('email', loginResponse.data.email)
				localStorage.setItem('access_key', loginResponse.data.access_key);
			} else {
				this.showToast(loginResponse.data.message)
			}
		} else {
			this.showToast('Please try again')
		}
	}


	showToast = (message) => {
		this.toaster.show(
			{
				message: message,
				action: {
					onClick: () => this.toaster.dismiss(),
					text: "Ok",
				},
				icon: "warning-sign",
				intent: Intent.DANGER
			}
		);
	}


	onChangeLoginInput = (e) => {
		const users = {
			[e.target.name]: e.target.value
		};
		this.setState(users)
	}

	render() {
		const { user, password } = this.state;

		if (localStorage.getItem('access_key') && localStorage.getItem('name') && localStorage.getItem('email')) {
			return <Redirect to='/dashboard' />
		}

		return (
			<div className="login-container" style={styles.container}>
				<div className="login-form" style={styles.login}>

					<div className="banner">
						<img src={logo} className="banner-image" alt="rkn software" style={styles.logo} />
					</div>

					<form className="form" onSubmit={this.login}>
						<FormGroup
							label="Enter username"
							labelFor="username">

							<InputGroup
								placeholder="Enter username"
								leftIcon="user"
								name="user"
								type="text"
								value={user}
								id="username"
								onChange={this.onChangeLoginInput} />

						</FormGroup>


						<FormGroup
							label="Enter password"
							labelFor="password">

							<InputGroup
								placeholder="Enter password"
								leftIcon="key"
								name="password"
								value={password}
								id="password"
								type="password"
								onChange={this.onChangeLoginInput} />

						</FormGroup>


						<Button
							icon="log-in"
							type="submit"
							loading={this.state.loading}>
							Login
						</Button>
					</form>

					<div className="help-text" style={styles.passwordForget}>
						Forget password
					</div>
				</div>

				<div>
					<Toaster position={Position.TOP_RIGHT} ref={this.refHandlers.toaster} />
				</div>
			</div>
		);
	}
}



const styles = {
	container: {
		width: '50%',
		margin: '30px auto'
	},
	login: {
		width: '51%',
		margin: '10px auto',
		background: '#eefbfb',
		padding: '30px'
	},
	passwordForget: {
		marginTop: '30px',
	},
	logo: {
		display: 'block',
		width: '256px',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '20px'
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loginAction: (user) => dispatch(loginAction(user))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);