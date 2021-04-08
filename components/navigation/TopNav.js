import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Text from '../utils/UbuntuFont';
import Colors from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

export default function (props) {
	return (
		<View>
			<View
				style={{
					paddingHorizontal: 20,
					height: 64,
					flexDirection: 'row',
					justifyContent: 'space-between',
					backgroundColor: '#fff',
					alignItems: 'center',
					borderColor: '#c0c0c0',
					borderBottomWidth: 1,
				}}
			>
				{props.withBack ? (
					<TouchableOpacity
						onPress={() => {
							props.navigation.goBack();
						}}
						style={{
							flex: 1,
							alignItems: 'flex-start',
							justifyContent: 'center',
						}}
					>
						{/* <Ionicons name="ios-arrow-back" size={24} color="#000" /> */}
						<Image style={{ width: 50, height: 50 }} source={require('../../assets/smallLogo.png')} />
					</TouchableOpacity>
				) : (
						<View style={{ flex: 1, alignItems: 'flex-start' }}>
					<TouchableOpacity
						onPress={() => {
						}}
						style={{
							flex: 1,
							alignItems: 'flex-start',
							justifyContent: 'center',
						}}
					>
						{/* <Ionicons name="ios-arrow-back" size={24} color="#000" /> */}
						<Image style={{ width: 50, height: 50 }} source={require('../../assets/smallLogo.png')} />
					</TouchableOpacity>

						</View>
					)}

				<View
					style={{
						alignItems: 'center',
						flex: 5,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text
						bold
						style={{
							color: Colors.topNavText,
							fontSize: parseInt(props.size),
						}}
					>
						{props.title}
					</Text>
				</View>
				<View
					style={{
						alignItems: 'flex-end',
						flex: 1,
						justifyContent: 'center',
					}}
				></View>
			</View>
		</View>
	);
}
