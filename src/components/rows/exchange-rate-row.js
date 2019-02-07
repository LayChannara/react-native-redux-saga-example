import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native"
import { ListItem, Body, Text } from "native-base";

const ExchangeRateRow = props => {

	return (
		<ListItem itemDivider style={{ backgroundColor: props.background }}>
			<Body>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<Text
						numberOfLines={1}
						style={{ fontFamily: 'KohinoorBangla-Regular', fontSize: 15, color: '#5856D6'}}>
						{props.item.currency + ' (' + props.item.symbol + ')'}
					</Text>
					<Text
						numberOfLines={1}
						style={{ fontFamily: 'KohinoorBangla-Regular', fontSize: 15, color: '#898C90'}}>
						{props.item.buy}
					</Text>
					<Text
						numberOfLines={1}
						style={{ fontFamily: 'KohinoorBangla-Regular', fontSize: 15, color: '#898C90'}}>
						{props.item.sell}
					</Text>
				</View>
			</Body>
		</ListItem>
	);
};

export default ExchangeRateRow;

ExchangeRateRow.defaultProps = {
	item: {},
	background: '#E7E7E7'
};

ExchangeRateRow.propTypes = {
	item: PropTypes.object,
	background: PropTypes.string
};
