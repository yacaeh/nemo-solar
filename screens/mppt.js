import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState}  from 'react';
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
			time:'04/05 Mon 16 : 40 : 15',
			MPPtime:1415,
		},
		{
			id: 2,
			time:'04/05 Mon 16 : 40 : 15',
			MPPtime:125,
		},
	]
	function getSystemList(querySnapshot) {
		const systemList = [];
		querySnapshot.forEach((res) => {
		  const { id, time, MPPtime } = res.data();
		  systemList = systemList.concat({
			id: id,
			time:time,
			MPPtime:MPPtime,
		  });
		});
		setSystems(systemList);
	  }
		
	async function listSystems() {
		await dbRef.onSnapshot(getSystemList).then(()=> setLoading(false));
	  }
	
	  useEffect(() => {
		//listSystems();	
		setSystems(sampleData);
	  }, []);
	  function secToHms(d) {
		d = Number(d);
		var h = Math.floor(d / 3600);
		var m = Math.floor(d % 3600 / 60);
	  
		var hDisplay = h > 0 ? (h +"시간") : "";
		var mDisplay = m > 0 ? (m +"분") : "";
		return hDisplay + mDisplay; 
	  }

	  const ItemContainer = (props) =>
		<View style={{ left:10, width: 400, height:250, flexDirection: 'column', justifyContent: 'flex-start' }}>
			<Text style={{ fontSize: 30, fontWeight: 'bold' }}>{props.title}</Text>
			<View style={{ left:10, top:20, width: 380, height:80, flexDirection: 'column', justifyContent: 'flex-start' }}>
			<Item title="Date" content={props.system.time}/>
			<Item title="MPP Range" content="200 V ~ 400 V" />
			<Item title="MPP Time" content={secToHms(props.system.MPPtime*10)} />
			</View>
		</View>
		;

	return (
		<Layout navigation={navigation} title="발전시간 (MPPT)" withBack size="25">
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
