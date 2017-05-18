import { createStore } from 'redux'
import rootReducer from '../reducers'

// initialState:初始化数据
export default function configureStore(initialState) {
	const store = createStore(rootReducer, initialState,
		//调起chrome扩展程序, 触发 redux-devtools
		window.devToolsExtension? window.devToolsExtension():undefined
	)
	return store
}
