import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Footer from '../components/global/Footer';
import Item from '../components/global/Item';

export default function ({ navigation }) {


	const ItemContainer = (props) =>
		<View style={{ left:10, width: 400, height:250, flexDirection: 'column', justifyContent: 'flex-start' }}>
			<Text style={{ fontSize: 30, fontWeight: 'bold' }}>{props.title}</Text>
			<View style={{ left:10, top:20, width: 380, height:125, flexDirection: 'column', justifyContent: 'flex-start' }}>
			<Item title="태양광1" content="xxxx V (전앖값)" />
			<Item title="태양광2" content="xxxx V (전앖값)" />
			<Item title="태양광3" content="" />
			<Item title="태양광4" content="" />
			</View>
		</View>
		;
	return (
		<Layout navigation={navigation} title="태양광 패널 실시간 전압" withBack size="25">
			<View
				style={{
					flex: 1,
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