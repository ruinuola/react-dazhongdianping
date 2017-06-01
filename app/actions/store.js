import * as actionType from '../constants/store'

export function update(data){
	return {
		type: actionType.STORE_UPDATE,
		data
	}
	
}

export function add(item){
	return {
		type: actionType.STORE_UPDATE,
		data:item
	}
}

export function rm(item){
	return {
		type: actionType.STORE_RM,
		data:item
	}
}
