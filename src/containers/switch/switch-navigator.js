import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import ExchangeRateScreen from '../screens/exchange-rate-screen'

const SwitchNavigator = createSwitchNavigator({
	ExchangeRateScreen: { screen: ExchangeRateScreen }
})

export default createAppContainer(SwitchNavigator);