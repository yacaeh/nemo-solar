import React, { useState } from 'react';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../provider/AuthProvider';

// Main
import Home from '../screens/Home';
import Mppt from '../screens/mppt';
import Solar from '../screens/solar';
import Monitor from '../screens/monitor';

// Auth screens
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ForgetPassword from '../screens/auth/ForgetPassword';

import Loading from '../screens/utils/Loading';

const firebaseConfig = {
    apiKey: "AIzaSyBxreeIXfHQkQoziFMsPkQz5Q64s9DFAKg",
    authDomain: "nemoaspts.firebaseapp.com",
    projectId: "nemoaspts",
    storageBucket: "nemoaspts.appspot.com",
    messagingSenderId: "451401112813",
    appId: "1:451401112813:web:4b6d2b15fb0834a535c0e4",
    measurementId: "G-2N7PWT63Y6"
};
if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

const AuthStack = createStackNavigator();

const Auth = () => {
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerMode: 'none',
				headerShown: false,
			}}
		>
			<AuthStack.Screen name="Login" component={Login} />
			<AuthStack.Screen name="Register" component={Register} />
			<AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
		</AuthStack.Navigator>
	);
};

const MainStack = createStackNavigator();

const Main = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerMode: 'none',
				headerShown: false,
			}}
		>
			<MainStack.Screen name="Home" component={Home} />
			<MainStack.Screen name="Mppt" component={Mppt} />
			<MainStack.Screen name="Solar" component={Solar} />
			<MainStack.Screen name="Monitor" component={Monitor} />
		</MainStack.Navigator>
	);
};

export default () => {
	const [isLoading,setIsLoading] = useState(true);
	setTimeout(() =>{
		setIsLoading(false);
	},1500)
	return (
		<NavigationContainer>
			{isLoading == true && <Loading />}
			{/* {user == false && <Auth />} */}
			{isLoading == false && <Main />}
		</NavigationContainer>
	);
};
