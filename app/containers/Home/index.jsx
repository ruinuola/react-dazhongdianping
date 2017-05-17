import React from 'react'
import { link } from 'react-router'

class Home extends React.Component {
	render() {
		return (
				<div>
					<p>Home</p>
					<link to="/list">to list</link>
				</div>
			)
	}
}

export default Home