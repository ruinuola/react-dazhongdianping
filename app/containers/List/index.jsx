import React from 'react'
import { hashHistory } from 'react-router'

class List extends React.Component {
	render() {
		return (
			<div>
				<p>List, url参数: /*{this.props.params.id}*/</p>
				<ul>
					{arr.map((item, index)=>{
						return <li key={index} onClick={this.clickHandle.bind(this, item)}>js jump</li>
					})}
				</ul>
			<div>
			)
	}
}

export default List