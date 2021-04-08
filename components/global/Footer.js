import React from 'react';
import { StyleSheet, View,Text, Linking } from 'react-native';
import Colors from '../../constants/colors';
const Footer = () => {
	const A = (props) => <Text onPress={() => Linking.openURL(props.children)} style={{color: 'blue'}}>{props.children}</Text>
    const M = (props) => <Text onPress={() => Linking.openURL(`mailto:${props.children}`)} style={{color: 'blue'}}>{props.children}</Text>
	return (
		<View style={styles.container}>
            <Text style={styles.textContainer}>
                {`· 주식회사 네모엘텍 , NEMO L TEC Co., Ltd. \n· 사업자등록번호: 422-87-00574 \n· 대표 : 김덕수 \n· 문의 : 052-289-8808 , `}
                <M>khs@nemolt.co.kr</M>
                {`\n· 홈페이지 : `}
                <A>https://www.nemolt.co.kr</A>
                {`\n\n`}
            </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
        flex: 0.22,
        backgroundColor:Colors.footer,
		flexDirection: 'column',
        justifyContent:'flex-end',
    },
    textContainer:{
        color:Colors.footerText,
        marginLeft:20,
    }
});

export default Footer;