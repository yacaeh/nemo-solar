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
			<View style={{ left:10, top:20, width: 380, height:80, flexDirection: 'column', justifyContent: 'flex-start' }}>
			<Item title="Date" content="04/05 Mon 16 : 40 : 15" />
			<Item title="MPP Range" content="200 V ~ 400 V" />
			<Item title="MPP Time" content="3시간 20분" />
			</View>
		</View>
		;

	return (
		<Layout navigation={navigation} title="발전시간 (MPPT)" withBack size="25">
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
