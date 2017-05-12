import React from 'React'

class Header extends React.Component {
	render() {
		return (
			<p>{this.props.title}</p>
		)
	}
}

export default Header