import React from 'react'

import Header from '../../components/Header'

import Carousel from './subpage/Carousel'
import Recommend from './subpage/Recommend'
import List from './subpage/List'

class Hello extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      now: Date.now()
    }
  }
  render() {
    return (
    	<div>
        <Header title="Hello页面"/>

    		<p onClick={this.clickHandler.bind(this)}>hello world {this.state.now}</p>
    		<hr/>
    		<Carousel/>
    		<Recommend/>
    		<List/>
    	</div>
    )
  }
  clickHandler(){
    // 设置 state 的值的时候，一定要用 this.setState ，不能直接赋值修改
    this.setState({
      now: Date.now()
    })
  }
}

export default Hello