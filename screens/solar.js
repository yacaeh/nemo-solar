import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Footer from '../components/global/Footer';
import Item from '../components/global/Item';
import * as firebase from 'firebase';

export default function ({ navigation }) {
	const [systems, setSystems] = useState([]);
	const dbRef = firebase.firestore().collection('nemosystem');
	const [isLoading, setLoading] = useState(true);
	const sampleData = [
		{
			id: 1,
			sunvoltage:1376,
			sunvoltage2:1376,
			sunvoltage3:'',
			sunvoltage4:'',
		},
		{
			id: 2,
			sunvoltage:1376,
			sunvoltage2:1376,
			sunvoltage3:'',
			sunvoltage4:'',
		},
	]

	function getSystemList(querySnapshot) {
		let systemList = [];
		querySnapshot.forEach((res) => {
		  const { id, sunvoltage, sunvoltage3,sunvoltag4 } = res.data();
		  systemList = systemList.concat({
			id: id,
			sunvoltage:sunvoltage?sunvoltage:'데이터 없음',
			sunvoltage2:sunvoltage,
			sunvoltage3:sunvoltage3,
			sunvoltage4:sunvoltag4,
		  });
		});
		setLoading(false);
		setSystems(systemList);
	  }
		
	async function listSystems() {
		await dbRef.onSnapshot(getSystemList);
	  }
	
	  useEffect(() => {
		listSystems();	
		//setSystems(sampleData);
	}, []);	

	const ItemContainer = (props) => 
		<View style={{ left:10, width: 400, height:250, flexDirection: 'column', justifyContent: 'flex-start' }}>
			<Text style={{ fontSize: 30, fontWeight: 'bold' }}>{props.title}</Text>
			<View style={{ left:10, top:20, width: 380, height:125, flexDirection: 'column', justifyContent: 'flex-start' }}>
			<Item title="태양광1" content={props.system.sunvoltage +" V (전앖값)" || "데이터 없음" }/>
			<Item title="태양광2" content={props.system.sunvoltage +" V (전앖값)" || "데이터 없음" }/>
			<Item title="태양광3" content="" />
			<Item title="태양광4" content="" />
			</View>
		</View>
		;
	ItemContainer.defaultProps = {
		title: "N번 시스템",
		system:{
			sunvoltage:'데이터 없음',
		}
	};
	
	return (
		<Layout navigation={navigation} title="태양광 패널 실시간 전압" withBack size="25">
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'flex-start',
				}}
			>
				{/* This text using ubuntu font */}
				{systems.map((system,index) => {return(
					<ItemContainer key={index} title={index+1+"번 시스템"} system={system}/>
					)
				})}
			</View>
			<Footer/>
		</Layout>
	);
}