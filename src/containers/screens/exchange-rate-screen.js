import React, { Component } from 'react'
import { ScrollView, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchExchangeRate } from '../../redux/actions'
import { Container, Content } from 'native-base';
import ExchangeRateHeader from '../../components/headers/exchange-rate-header'
import ExchangeRateRow from '../../components/rows/exchange-rate-row'

class ExchangeRate extends Component {

	componentDidMount() {
		this.props.fetchExchangeRate()
	}

	render() {
		return (
			<Container>
				<ExchangeRateHeader 
				title='Exchange Rate' 
				loading={this.props.exchangeRates.fetching}
				reload={this.reload.bind(this)}/>
	
					<FlatList 
					refreshing={this.props.exchangeRates.fetching}
					onRefresh={this.reload.bind(this)}
					keyExtractor={(item, index) => item.currency} 
					data={this.props.exchangeRates.exchange_rate_list} 
					renderItem={({item, index}) => 
						<ExchangeRateRow 
						key={index} 
						item={item} 
						background={(index % 2) == 0 ? '#EAEAEA' : '#F7F7F7'}/>
					}>
					</FlatList>				
			</Container>
		)
	}

	reload = () => {
		this.props.fetchExchangeRate()
	}
}

const mapStateToProps = state => {
	return { exchangeRates: state.exchangeRates }
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ fetchExchangeRate }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ExchangeRate)