import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'
import { Button } from 'antd'





function Register(props) {
	const { classes } = props

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<main>
			<div>
				<div> Avartar in the future</div>
					
				<h1> Register Account </h1>
				<form onSubmit={e => e.preventDefault() && false }>
					<form >
						<label for="name">Name</label>
						<input id="name" name="name" autoComplete="off" autoFocus value={name} onChange={e => setName(e.target.value)} />
					</form>
					<form >
						<label for="email">Email Address</label>
						<input id="email" name="email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)}  />
					</form>
					<form>
						<label htmlFor="password">Password</label>
						<input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)}  />
					</form>
		

					<Button
						type="submit"
						fullWidth
						variant="contained"
						onClick={onRegister}>
						Register
          			</Button>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						component={Link}
						href="/login">
						Go back to Login
          			</Button>
				</form>
			</div>
		</main>
	)

	async function onRegister() {
		try {
			await firebase.register(name, email, password)
			props.history.replace('/dashboard') //if it's successful, the user will be able to go to the dashboard
		} catch(error) { //catch some error if we have one 
			alert(error.message)
		}
	}
}

export default withRouter(Register)