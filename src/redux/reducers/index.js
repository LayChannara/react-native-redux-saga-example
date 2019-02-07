import c from '../constants'
import { combineReducers } from 'redux'

const exchangeRateState = {
	exchange_rate_list: [],
	fetching: false,
	fetchError: false
};

export const exchangeRates = (state = exchangeRateState, action) => {
	switch (action.type) {
		case c.FETCH_EXCHANGE_RATE_START:
			return { ...state, 
				fetching: true 
			}
		case c.FETCH_EXCHANGE_RATE_SUCCESS:
			let list = []
			for (let [key, value] of Object.entries(action.payload)) {
				list.push({...value,"currency": key})
			}
			return {
				...state,
				exchange_rate_list: list,
				fetching: false,
				fetchError: false
			}
		case c.FETCH_EXCHANGE_RATE_FAILURE:
			return { ...state, 
				fetchError: true, 
				fetching: false 
			}
		default:
			return state
	}
}

export const rootReducer = combineReducers({
	exchangeRates,
})