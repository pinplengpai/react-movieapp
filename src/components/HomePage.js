import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
	background-color: #8aa15f;
	color: white;
`

function HomePage(props) {
	const { classes } = props

	return (
		<main >
			<div >
				<div>Avatar in the future</div>
				<h1> Hello Guest!</h1>
				<Button
					type="submit"
					variant="contained"
					component={Link}
					to="/register">
					Register
          		</Button>
				<Button
					type="submit"
					variant="contained"
					component={Link}
					to="/login">
					Login
          		</Button>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/dashboard">
					Dashboard
          		</Button>
			</div>
		</main>
	)
}

export default HomePage