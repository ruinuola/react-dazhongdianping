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
    	// ģ���½
    	this.props.userinfoActions.login({
    		userid: 'abc',
    		city: 'beijing'
    	})
    }
}

// ͨ������ķ�װ,�Ͱ� userinfo ��userinfoActions ����props���뵽Hello����,����Hello�����ͨ�� this.props.userinfo �� this.props.userinfoActions ���ɻ�ȡ���ݺ�actions
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