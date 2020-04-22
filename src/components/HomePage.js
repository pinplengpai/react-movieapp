import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'


function HomePage() {

	return (
		<main >
			<div >
				<div>Avatar in the future</div>
				<h1> Hello Guest!</h1>
				<Button
					type="submit"
					variant="contained"
					component={Link}
					href="/register">
					Register
          		</Button>
				<Button
					type="submit"
					variant="contained"
					component={Link}
					href="/login">
					Login
          		</Button>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					href="/dashboard">
					Dashboard
          		</Button>
			</div>
		</main>
	)
}

export default HomePage