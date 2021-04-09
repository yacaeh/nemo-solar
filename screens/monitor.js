import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState}  from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Footer from '../components/global/Footer';
import firebase from 'firebase';
import 'firebase/firestore';

export default function ({ navigation }) {
	const [systems, setSystems] = useState([]);
	const dbRef = firebase.firestore().collection('nemosystem');
	const [isLoading, setLoading] = useState(true);
	const sampleData = [
		{
			id: 1,
			invertervoltage1:125,
			invertervoltage2:126,
			invertervoltage3:0,
	  },
		{
			id: 2,
			invertervoltage1:125,
			invertervoltage2:2,
			invertervoltage3:2,
	  },
	]

	function getSystemList(querySnapshot) {
		let systemList = [];
		querySnapshot.forEach((res) => {
			const { id, invertervoltage1, invertervoltage2,invertervoltage3 } = res.data();
			systemList = systemList.concat({
			  id: id,
			  invertervoltage1:invertervoltage1,
			  invertervoltage2:invertervoltage2,
			  invertervoltage3:invertervoltage3,
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

	const Item = (props) => 
	<View style={{ flex: 1, marginTop:10, width: 100, height:70, flexDirection: 'column', alignItems:'center', justifyContent: 'center', }}>
		<View style={{ flex: 1, width: 120, height:60, flexDirection: 'row', justifyContent: 'space-evenly', }}>
			<Image style={[{width:41, height:39}, props.content ? { tintColor: ''  } : { tintColor: '#AAAAAA', opacity:0.8  }]} source={require('../assets/greenCircle.png')}/>
			<Image style={[{width:41, height:39}, props.content ? { tintColor: '#AAAAAA' , opacity:0.8 } : { tintColor: ''  }]} source={require('../assets/redCircle.png')}/>
		</View>
		<Text stlye={{marginTop:10, fontSize:5}}>{props.title}</Text>
	</View>;

	const ItemContainer = (props) =>
		<View style={{ width: 400, height:200, flexDirection: 'column', justifyContent: 'flex-start' }}>
			<Text style={{ fontSize: 30, fontWeight: 'bold' }}>{props.title}</Text>
			<View style={{top:40, width:400, height:90, flexDirection: 'row', justifyContent: 'center', borderWidth:1}}>
				<Item title="1번 인버터(main)" content={props.system.invertervoltage1>3?true:false}/>
				<Item title="2번 인버터" content={props.system.invertervoltage2>3?true:false}/>
				<Item title="3번 인버터" content={props.system.invertervoltage3>3?true:false}/>
			</View>
		</View>
		;
	ItemContainer.defaultProps = {
		title: "N번 시스템",
		system:{
			invertervoltage1:false,
			invertervoltage2:false,
			invertervoltage3:false,
		}
	};
	
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
				{systems.map((system,index) => {return(
					<ItemContainer key={index} title={index+1+"번 시스템"} system={system}/>
					)
				})}
			</View>
			<Footer/>
		</Layout>
	);
}
