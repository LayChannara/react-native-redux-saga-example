import React, { Component } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Header, Body, Title, Icon, Right, Spinner} from "native-base";
import PropTypes from "prop-types";

class ExchangeRateHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Header>
				<Body>
					<Title 
					style={{ fontFamily: 'KohinoorBangla-Semibold', fontSize: 21, color: '#898C90' }}>
					{this.props.title}
					</Title>
				</Body>
				<Right>
					{
						this.props.loading ? this.activityIndicatorItem : this.refreshItem
					}
				</Right>
			</Header>
		);
	}

	activityIndicatorItem = (
		<Spinner size='small' color='#898C90' />
	)

	refreshItem = (
		<TouchableWithoutFeedback hitSlop={{ top: 24, bottom: 24, left: 24, right: 46 }}>
			<View>
				<Icon
					name='refresh'
					style={{ color: '#898C90', fontSize: 40, marginTop: 6 }}
					onPress={() => this.props.reload()} />
			</View>
		</TouchableWithoutFeedback>
	)
}

export default ExchangeRateHeader;

ExchangeRateHeader.propTypes = {
	title: PropTypes.string,
	reload: PropTypes.func,
	loading: PropTypes.bool
};

ExchangeRateHeader.defaultProps = {
	title: "",
	reload: () => null,
	loading: false
};
