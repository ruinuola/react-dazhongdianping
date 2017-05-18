import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../actions/userinfo'

import A from '../Components/A'
import B from '../Components/B'
import C from '../Components/C'

class Hello extends React.Component {
    render() {
        return (
            <div>
            	<p>hello world</p>
            	<hr/>
            	<A userinfo={this.props.userinfo}/>
            	<hr/>
            	<B userinfo={this.props.userinfo}/>
            	<hr/>
            	<C actions={this.props.userinfoActions}/>
            </div>
        )
    }
    componentDidMount() {
    	// 模拟登陆
    	this.props.userinfoActions.login({
    		userid: 'abc',
    		city: 'beijing'
    	})
    }
}

// 通过下面的封装,就把 userinfo 和userinfoActions 当作props传入到Hello中了,即在Hello组件中通过 this.props.userinfo 和 this.props.userinfoActions 即可获取数据和actions
function mapStateToProps(state){
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return {
		userinfoActions: bindActionCreators(userinfoActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Hello)