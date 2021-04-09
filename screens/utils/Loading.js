import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	View,
	ActivityIndicator,
	Image
} from 'react-native';
import Layout from '../../components/global/Layout';
import Text from '../../components/utils/UbuntuFont';
import Colors from '../../constants/colors';

export default function ({ navigation }) {
	const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

	return (
		<Layout navigation={navigation}>
			<View
				style={styles.container}>
				<Text style={styles.title}>{`지역특화산업육성+(R&D) \n- 지역주력산업육성`}</Text>
				<Text style={styles.description}>시계열 데이터 예측이 가능한 <B>인공지능 기반</B>
				으로 다수의 최대전력 발생지점 (MPP)을 가지는 <B>태양광 모듈 직∙병렬 변환 </B>시스템</Text>
				{/* This text using ubuntu font */}
				<Image style={styles.logo} source={require("../../assets/logo.png")}/>
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width:'100%',
		height:60
	},
	title: {
		width:'95%',
		fontWeight: 'bold',
		fontSize:35,
		alignContent:'center',
		textAlign:'center'
	},
	description:{
		width:'80%',
		marginTop:20,
		fontSize:30,
		textAlign:'center',
		alignContent:'center',
	},
	logo: {
		marginTop:70,
		width: 300,
		height: 100,
	},
  });
  