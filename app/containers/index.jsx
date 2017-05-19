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
                        <div>正在加载...</div>
                }
            </div>
        )
    }
    // componentDidMount() {
    // 	// 模拟登陆
    // 	this.props.userinfoActions.login({
    // 		userid: 'abc',
    // 		city: 'beijing'
    // 	})
    // }
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
)(App)