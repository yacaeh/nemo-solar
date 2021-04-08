import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Footer from '../components/global/Footer';

export default function ({ navigation }) {
	const Item = (props) => 
	<View style={{ flex: 1, marginTop:10, width: 100, height:70, flexDirection: 'column', alignItems:'center', justifyContent: 'center', }}>
		<View style={{ flex: 1, width: 120, height:60, flexDirection: 'row', justifyContent: 'space-evenly', }}>
			<Image style={{width:41, height:39}} source={require('../assets/greenCircle.png')}/>
			<Image style={{width:41, height:39}} source={require('../assets/redCircle.png')}/>
		</View>
		<Text stlye={{marginTop:10, fontSize:5}}>{props.title}</Text>
	</View>;

	const ItemContainer = (props) =>
		<View style={{ width: 400, height:200, flexDirection: 'column', justifyContent: 'flex-start' }}>
			<Text style={{ fontSize: 30, fontWeight: 'bold' }}>{props.title}</Text>
			<View style={{top:40, width:400, height:90, flexDirection: 'row', justifyContent: 'center', borderWidth:1}}>
				<Item title="1번 인버터(main)" content={false}/>
				<Item title="2번 인버터" content={false} />
				<Item title="3번 인버터" content={false} />
			</View>
		</View>
		;

	return (
		<Layout navigation={navigation} title="인버터 이상상황 검지" withBack size="25">
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'flex-start',
				}}
			>
				{/* This text using ubuntu font */}
				<ItemContainer title={"1번 시스템"} />
				<ItemContainer title={"2번 시스템"} />
			</View>
			<Footer/>
		</Layout>
	);
}
