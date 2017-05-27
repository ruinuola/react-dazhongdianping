import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Star from '../../components/Star'

import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        // this.state = {
        //   data: false
        // }
    }
    render() {
    	// 获取数据
    	const data = this.props.data
      // console.log('DetailInfo:'+data)
      return (
          <div id="detail-info-container">
            怎么不显示
            <div className="info-container clear-fix">
              <div className="info-img-container float-left">
                <img src={data.img}/>
              </div>
              <div className="info-content">
                <h1>{data.title}</h1>
                <div className="star-container">
                  <Star star={data.star}/>
                  <span className="price">￥{data.price}</span>
                </div>
                <p className="sub-title">{data.subTitle}</p>
              </div>
            </div>
            {/* 设置 innerHTML */}
            <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>
          </div>
      )
    }
    // componentDidMount(){//组件实例初次渲染后被调用
    //   this.setState({
    //     data: this.props.data
    //   })
    // }
}

export default DetailInfo