import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
        	citys:['北京','上海','杭州','广州','苏州','深圳','南京','天津','重庆','厦门','武汉','西安']
        }
    }
    render() {
    	const citys = this.state.citys
        return (
        	
            <div className="city-list-container">
            	<ul className="clear-fix">
            		{
            			citys.map((item, index)=>{
            				return (
            					<li key={index}>
			            			<span onClick={this.clickHandle.bind(this, item)}>{item}</span>
			            		</li>
            					)
            			})
            		}
            	</ul>
            </div>
        )
    }
    clickHandle( cityName ){
    	const changeFn = this.props.changeFn
    	changeFn( cityName );
    }
}

export default CityList