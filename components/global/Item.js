import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
const Item = (props) =>
<View style={{ flex: 1, height: 30, flexDirection: 'row' }}>
    <View style={{ flex: 3 }}>
        <Text style={styles.title}>
            {props.title}
        </Text>
    </View>
    <View style={{ flex: 7, borderWidth: 1, height: 30, }}>
        <Text style={styles.content}>
            {props.content}
        </Text>
    </View>
</View>;

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	content: {
		textAlign: 'right',
		marginRight: 15,
		fontSize: 20,
	},

});
export default Item;