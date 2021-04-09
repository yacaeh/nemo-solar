import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import * as firebase from 'firebase';

import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Colors from '../constants/colors';
import Footer from '../components/global/Footer';

export default function ({ navigation }) {
	return (
		<Layout navigation={navigation} title="AI Serial Parallel Transform System" size="15">
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Solar');
					}}
					style={styles.container}
				>
					<Image style={styles.image} source={require('../assets/solarPannel.png')}/>
					<Text style={styles.title} bold>
					{`\t\t태양광 패널 실시간 전압`}
					</Text>
				</TouchableOpacity>
				<Image style={styles.divider} source={require('../assets/divider.png')}/>		
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Mppt');
					}}
					style={styles.container}
				>
					<Text style={styles.title} bold>
					{'발전 (MPPT) 시간\t\t\t'}
					</Text>
					<Image style={styles.image} source={require('../assets/mppt.png')}/>					
				</TouchableOpacity>		
				<Image style={styles.divider} source={require('../assets/divider.png')}/>		
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Monitor');
					}}
					style={styles.container}
				>
					<Image style={styles.image} source={require('../assets/acdc.png')}/>
					<Text style={styles.title} bold>
					{'\t\t인버터 이상 모니터링'}
					</Text>
				</TouchableOpacity>
			</View>
			<Footer/>
		</Layout>
	);
}


const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
		alignItems: 'center',
	},
	image: {
		width:100,
		height:100,
	},
	divider:{
		width:400,
		height:12,
	},
	title:{
		justifyContent:'center',
		alignItems: 'center',
		color:Colors.footerText,
		fontSize:20,
		fontWeight: 'bold',
	}
});