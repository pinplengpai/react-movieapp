import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'
import { Button } from 'antd'



function SignIn(props) {
	const { classes } = props

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<main>
			<div>
				<div>avatar in the future</div>
				<h1>Sign in</h1>
				<form  onSubmit={e => e.preventDefault() && false}>
					<form margin="normal" required fullWidth>
						<label for="email">Email Address</label>
						<input id="email" name="email" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
					</form>
					<form margin="normal" required fullWidth>
						<label for="password">Password</label>
						<input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
					</form>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={login}>
						Sign in
          			</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						component={Link}
						href="/register">
						Register
          			</Button>
				</form>
			</div>
		</main>
	)

	async function login() {
		try {
			await firebase.login(email, password)
			props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
	}
}

export default withRouter(SignIn)