import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userInfoActionsFromOtherFile from '../actions/userinfo'

class App extends React.Component {
    render() {
        return (
            <div>
            	{
                    this.state.initDone?
                        this.props.children:
                        <div>���ڼ���...</div>
                }
            </div>
        )
    }
    // componentDidMount() {
    // 	// ģ���½
    // 	this.props.userinfoActions.login({
    // 		userid: 'abc',
    // 		city: 'beijing'
    // 	})
    // }
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
)(App)