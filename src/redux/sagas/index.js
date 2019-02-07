import {
	call,
	put,
	all,
	takeLatest
} from "redux-saga/effects"
import axios from "axios"
import c from "../constants"

export function* fetchExchangeRate() {
	try {
		const response = yield call(
			axios.get,
			"https://blockchain.info/ticker"
		)
		yield put({ 
			type: c.FETCH_EXCHANGE_RATE_SUCCESS, 
			payload: response.data 
		})
	} catch (error) {
		yield put({
			type: c.FETCH_EXCHANGE_RATE_FAILURE,
			payload: error
		})
	}
}

export function* watchFetchExchangeRate() {
	yield takeLatest(c.FETCH_EXCHANGE_RATE_START, fetchExchangeRate)
}

export default function* root() {
	yield all([
		call(watchFetchExchangeRate),
	])
}