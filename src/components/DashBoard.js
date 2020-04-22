import React from 'react'
import firebase from '../firebase'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import MovieList from './movie-list';

const Button = styled.button`
	background-color: #8aa15f;
`
function Dashboard(props) {
	const { classes } = props


	if(!firebase.getCurrentUsername()) { 
		// not logged in
		alert('Please login first') //so we need to check whether the user is really login 
		props.history.replace('/login')
		return null
	} 

	return (
		<main>
			<div>
				<div>avartar</div>
				<h1> Hello { firebase.getCurrentUsername() }</h1>
			
				<Button
					type="submit"
					variant="contained"
					onClick={logout}>
					Logout
          		</Button>
				<MovieList />

			</div>
		</main>
	)

	async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default withRouter(Dashboard)