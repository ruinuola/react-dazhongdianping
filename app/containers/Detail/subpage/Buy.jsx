import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as storeActionsFromFile from '../../../actions/store'

import BuyAndStore from '../../../components/BuyAndStore'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	isStore: false
        }
    }
    render() {
        return (
            <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
        )
    }
    componentDidMount(){
    	// 验证当前商户是否收藏
    	this.checkStoreState()
    }
    // 验证当前商户是否收藏
    checkStoreState() {
    	const id = this.props.id
    	const store = this.props.store
        console.log('store:'+store)

		// some方法会依次执行数组的每个元素：
		//   如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
		//   如果没有满足条件的元素，则返回false。
    	store.some(item => {
    		if(item.is ===id){
    			// 已经被收藏
    			this.setState({
    				isStore:true
    			})
    			// 跳出循环
    			return true
    		}
    	})
    }
    // 检查登录状态
    loginCheck() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if (!userinfo.username) {
            // 跳转到登录页面的时候，要传入目标router，以便登录完了可以自己跳转回来
                hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
                return false
        }
        return true
    }
    // 收藏按钮点击
    storeHandle(){
    	// 验证登录，未登录则return
    	const loginFlag = this.loginCheck()
    	if(!loginFlag){
    		return
    	}

    	const id = this.props.id
    	const storeActions = this.props.storeActions
    	if (this.state.isStore) {
    		storeActions.rm( {id: id} )
    	}else {
    		storeActions.add( {id: id} )
    	}
    	// 修改状态
    	this.setState({
    		isStore: !this.state.isStore
    	})
    }
    
    // 购买事件
    buyHandle(){
    	// 验证登录，未登录则return
    	const loginFlag = this.loginCheck()
    	if(!loginFlag){
    		return
    	}
    	// 此过程为模拟购买，因此可省去复杂的购买过程

      // 跳转到用户主页
      hashHistory.push('/User')
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
    	storeActions:bindActionCreators(
				storeActionsFromFile,dispatch
    	)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)