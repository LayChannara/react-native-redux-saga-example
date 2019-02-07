import c from '../constants'

export const fetchExchangeRate = () => {
	return {
		type: c.FETCH_EXCHANGE_RATE_START
	}
}