(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{402:function(e,t,n){e.exports=n.p+"static/media/login.6d9f9238.png"},403:function(e,t,n){e.exports=n.p+"static/media/register.034666df.png"},404:function(e,t,n){e.exports=n.p+"static/media/forget.b210f38c.png"},490:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ee}));var a=n(17),r=n.n(a),o=n(12),l=n.n(o),c=n(0),i=n.n(c),s=n(676),u=n(680),d=n(2),m=n(677),f=n(63),g=n(681),p=(n(192),n(82)),b=n(45),y=(n(531),n(425)),h=n(678),j=n(679),E="#F7F7F7",x="#3366FF",C="#dc3545",v="#ffc107",k="#000",w="#2F2E41",S="rgb(143, 155, 179)",z="#000",I=n(430),T=function(e){return i.a.createElement(I.a,{name:e.icon,style:{marginBottom:-7},size:24,color:e.focused?z:S})},F=n(7),O=n.n(F),R=n(26),P=function(e){return i.a.createElement(R.a,O()({},e,{style:[e.style,{fontFamily:e.bold?"Ubuntu_700Bold":e.medium?"Ubuntu_500Medium":e.light?"Ubuntu_300Light":"Ubuntu_400Regular"}]}))},D=function(e){return i.a.createElement(P,{bold:!0,style:{marginBottom:5,color:e.focused?z:S,fontSize:10}},e.title)},_=n(22),U=n(3),B=n(43),L=n(38),A=n(66),H=n(39),M=n(75),W=n(31),V=n(189),N=function(e){return i.a.createElement(U.a,null,i.a.createElement(U.a,{style:{paddingHorizontal:20,height:64,flexDirection:"row",justifyContent:"space-between",backgroundColor:"#fff",alignItems:"center",borderColor:"#c0c0c0",borderBottomWidth:1}},e.withBack?i.a.createElement(_.a,{onPress:function(){e.navigation.goBack()},style:{flex:1,alignItems:"flex-start",justifyContent:"center"}},i.a.createElement(I.a,{name:"ios-arrow-back",size:24,color:"#000"})):i.a.createElement(U.a,{style:{flex:1,alignItems:"flex-start"}}),i.a.createElement(U.a,{style:{alignItems:"center",flex:5,flexDirection:"row",alignItems:"center",justifyContent:"center"}},i.a.createElement(P,{bold:!0,style:{color:k,fontSize:16}},e.title)),i.a.createElement(U.a,{style:{alignItems:"flex-end",flex:1,justifyContent:"center"}})))},G=function(e){return i.a.createElement(U.a,{style:q.container},e.title&&i.a.createElement(N,{navigation:e.navigation,title:e.title,withBack:!!e.withBack}),e.children)},q=d.a.create({container:{flex:1,flexDirection:"column",backgroundColor:E}}),J=function(e){var t=e.navigation,n=b.firestore().collection("devices"),a=Object(c.useState)(""),o=l()(a,2),s=o[0],u=o[1],d=Object(c.useState)(""),m=l()(d,2),f=m[0],g=m[1],p=Object(c.useState)(!1),y=l()(p,2),h=y[0],j=y[1],E=Object(c.useState)(!1),x=l()(E,2),k=x[0],S=x[1],z=Object(c.useState)([]),I=l()(z,2),T=I[0],F=I[1];function O(e){var t=[];e.forEach((function(e){var n=e.data(),a=n.name,r=n.ip;t.push({key:e.id,name:a,ip:r})})),j(!1),F(t)}return Object(c.useEffect)((function(){r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(n.onSnapshot(O));case 2:case"end":return e.stop()}}),null,null,null,Promise)})),i.a.createElement(G,{navigation:t,title:"LED \ub9ac\uc2a4\ud2b8"},i.a.createElement(B.a,{contentContainerStyle:{flexGrow:1}},i.a.createElement(U.a,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f7f7f7"}},T.map((function(e,n){return i.a.createElement(_.a,{onPress:function(){return t.navigate("SecondScreen",{key:e.key,name:e.name,id:e.id,serverIP:e.ip})}},i.a.createElement(V.a,{containerStyle:{},wrapperStyle:{},key:e.key},i.a.createElement(V.a.Title,null,n+1+"."+e.name),i.a.createElement(V.a.Divider,null),i.a.createElement(U.a,{style:{position:"relative",alignItems:"center",width:300}},i.a.createElement(W.a,{style:{width:"100%",height:200},resizeMode:"stretch",source:{uri:e.ip+"/frame.jpg"}}),i.a.createElement(P,{style:{color:v,fontSize:15}},"IP: "+e.ip))))})),i.a.createElement(M.a,{animationType:"slide",transparent:!0,visible:k,onRequestClose:function(){A.a.alert("Modal has been closed.")}},i.a.createElement(U.a,{style:{backgroundColor:"#000000aa"}},i.a.createElement(U.a,{style:K.modalView},i.a.createElement(P,{style:{color:w,fontSize:16}},"\uc774\ub984"),i.a.createElement(U.a,{style:K.textInputContainer},i.a.createElement(L.a,{style:K.textInput,placeholder:"\uce74\uba54\ub77c\uba85",placeholderStyle:{fontFamily:"Ubuntu_400Regular"},value:s,autoCapitalize:"none",autoCompleteType:"off",autoCorrect:!1,onChangeText:function(e){return u(e)}})),i.a.createElement(P,{style:{color:w,fontSize:16}},"IP"),i.a.createElement(U.a,{style:K.textInputContainer},i.a.createElement(L.a,{style:K.textInput,placeholder:"https://127.0.0.1:1443",placeholderStyle:{fontFamily:"Ubuntu_400Regular"},value:f,autoCompleteType:"off",autoCorrect:!1,onChangeText:function(e){return g(e)}})),i.a.createElement(_.a,{onPress:function(){r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s){e.next=4;break}A.a.alert("\ub514\ubc14\uc774\uc2a4 \uc774\ub984\uc774 \uc5c6\uc2b5\ub2c8\ub2e4!"),e.next=10;break;case 4:if(""!==f){e.next=8;break}A.a.alert("IP\uc8fc\uc18c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4!"),e.next=10;break;case 8:return e.next=10,r.a.awrap(n.add({name:s,ip:f}).then((function(e){u(""),g(""),S(!k),A.a.alert("\ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")})).catch((function(e){console.error("Error found: ",e),A.a.alert("\uc5d0\ub7ec\ubc1c\uc0dd.",e)})));case 10:case"end":return e.stop()}}),null,null,null,Promise),S(!k)},disabled:h,style:{flexDirection:"row",marginTop:20}},i.a.createElement(U.a,{style:K.button},h?i.a.createElement(H.a,{color:"#fff"}):i.a.createElement(P,{bold:!0,style:{fontSize:16,color:"white"}},"\ub4f1\ub85d\ud558\uae30"))),i.a.createElement(_.a,{onPress:function(){S(!k)},disabled:h,style:{flexDirection:"row",marginTop:20}},i.a.createElement(U.a,{style:K.button},h?i.a.createElement(H.a,{color:"#fff"}):i.a.createElement(P,{bold:!0,style:{fontSize:16,color:"white"}},"\ucde8\uc18c")))))),i.a.createElement(_.a,{onPress:function(){S(!0)},style:{backgroundColor:C,padding:20,paddingHorizontal:120,marginTop:10,borderRadius:10}},i.a.createElement(P,{style:{color:"white",fontSize:20},bold:!0},"\ub4f1\ub85d\ud558\uae30")))))},K=d.a.create({container:{flex:1,flexDirection:"column",backgroundColor:"gray"},textInputContainer:{marginTop:15,backgroundColor:"#FFF",borderColor:"#d8d8d8",borderWidth:1,borderRadius:8,flexDirection:"row"},textInput:{padding:10,paddingHorizontal:20,textAlign:"left",color:"black",flex:1,fontFamily:"Ubuntu_400Regular"},button:{flex:1,alignItems:"center",justifyContent:"center",padding:15,backgroundColor:x,borderRadius:8},card:{backgroundColor:"#fff",flex:1,borderTopLeftRadius:10,borderTopRightRadius:10,marginLeft:10,marginRight:10},modalView:{margin:20,backgroundColor:"white",borderRadius:20,padding:35,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5},openButton:{backgroundColor:"#F194FF",borderRadius:20,padding:10,elevation:2},textStyle:{color:"white",fontWeight:"bold",textAlign:"center"},modalText:{marginBottom:15,textAlign:"center"}}),Q=n(99),X=n(492),Y=n(482),Z=n.n(Y),$=function(e){var t=e.route,n=e.navigation,a=b.firestore().collection("devices"),o=Object(c.useState)(!1),s=l()(o,2),u=(s[0],s[1],Object(c.useState)(!1)),d=l()(u,2),m=(d[0],d[1],Object(c.useState)(!0)),f=l()(m,2),g=f[0],p=f[1],y=Object(c.useState)(!0),h=l()(y,2),j=h[0],E=h[1],x=Object(c.useState)(""),v=l()(x,2),k=v[0],S=v[1],z=Object(c.useState)(""),I=l()(z,2),T=I[0],F=I[1],O=Object(c.useState)(!0),R=l()(O,2),D=(R[0],R[1],Object(c.useState)(!0)),L=l()(D,2),H=(L[0],L[1],Object(c.useState)(!0)),M=l()(H,2),W=(M[0],M[1],Object(c.useState)(!0)),V=l()(W,2),N=(V[0],V[1],t.params.serverIP),q=t.params.name,J=(t.params.id,t.params.key);function K(e){var t=new FormData;t.append("type",e),fetch(N+"/mode",{method:"POST",headers:{Accept:"application/json","Content-Type":"multipart/form-data"},body:t}).then((function(t){A.a.alert(e+" \ubaa8\ub4dc\uac00 \uc801\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")})).catch((function(t){A.a.alert(e+" \ubaa8\ub4dc \uc801\uc6a9\uc5d0 \uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4."),console.error(t)}))}Object(c.useEffect)((function(){fetch(N+"/data").then((function(e){return e.json()})).then((function(e){p(e.isAuto),E(e.isLightSensor),S(e.lightValue),F(e.lightSensorValue)})).catch((function(e){return console.error(e)}))}),[]);var Y=N+"/frame.mjpg";return i.a.createElement(G,{navigation:n,title:"\uc0c1\uc138\ubcf4\uae30",withBack:!0},i.a.createElement(B.a,{contentContainerStyle:{flexGrow:1}},i.a.createElement(U.a,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f7f7f7"}},i.a.createElement(P,{style:{fontSize:20}},"\uc774\ub984: ",q),i.a.createElement(P,{style:{fontSize:20}},"IP: ",N),i.a.createElement(X.a,{style:ee.backgroundVideo,automaticallyAdjustContentInsets:!0,scalesPageToFit:!0,startInLoadingState:!1,contentInset:{top:0,right:0,left:0,bottom:0},scrollEnabled:!1,source:{html:'<html><body><img src="'+Y+'" width="100%" style="background-color: gray; min-height: 100%; min-width: 100%; position: fixed; top: 0; left: 0;"></body></html>',baseUrl:"/"}})),i.a.createElement(U.a,{style:{flex:3,alignItems:"center",paddingHorizontal:20,paddingBottom:20,backgroundColor:"#fff"}},i.a.createElement(P,{style:{fontSize:20}},"LED \ubc1d\uae30:",Number(k)," %"),i.a.createElement(P,{style:{fontSize:20}},"\uc870 \ub3c4:",Number(T)," LUX"),i.a.createElement(U.a,{style:{flexDirection:"row",alignItems:"center",marginTop:15,justifyContent:"center"}},i.a.createElement(P,{style:{fontSize:20,color:w}},"\uc870\ub3c4\uc13c\uc11c On/Off"),i.a.createElement(Q.a,{trackColor:{false:"#767577",true:"#81b0ff"},thumbColor:j?"#f5dd4b":"#f4f3f4",ios_backgroundColor:"#3e3e3e",onValueChange:function(){E((function(e){return!e})),K(j?"no_light_sensor":"light_sensor")},value:j})),i.a.createElement(U.a,{style:{flexDirection:"row",alignItems:"center",marginTop:15,justifyContent:"center"}},i.a.createElement(P,{style:{fontSize:20,color:w}},"\uc790\ub3d9\ubaa8\ub4dc On/Off"),i.a.createElement(Q.a,{trackColor:{false:"#767577",true:"#81b0ff"},thumbColor:g?"#f5dd4b":"#f4f3f4",ios_backgroundColor:"#3e3e3e",onValueChange:function(){p((function(e){return!e})),K(g?"manual":"auto")},value:g})),i.a.createElement(U.a,{style:{flexDirection:"row",alignItems:"center",marginTop:15,justifyContent:"center"}},i.a.createElement(P,{style:{fontSize:20,color:w}},"\ubc1d\uae30 \uac12 \uc870\uc808"),i.a.createElement(Z.a,{disabled:g,style:{width:200,height:40},minimumValue:0,maximumValue:100,step:10,minimumTrackTintColor:"#EE0032",maximumTrackTintColor:"#333333",onSlidingComplete:function(e){S(k);var t=new FormData;t.append("value",e),fetch(N+"/light",{method:"POST",headers:{Accept:"application/json","Content-Type":"multipart/form-data"},body:t}).then((function(t){A.a.alert(e+" \ubc1d\uae30\uac00 \uc801\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),S(k)})).catch((function(t){A.a.alert(e+" \ubc1d\uae30 \uc801\uc6a9\uc5d0 \uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4."),console.error(t)}))},onValueChange:S,value:Number(k)})),i.a.createElement(_.a,{onPress:function(){!function(e){r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(a.doc(e).delete());case 2:console.log("Deleted ",e),n.navigate("Home");case 4:case"end":return t.stop()}}),null,null,null,Promise)}(J)},style:{backgroundColor:C,padding:20,paddingHorizontal:120,marginTop:10,borderRadius:10}},i.a.createElement(P,{style:{color:"white",fontSize:20},bold:!0},"\uc7a5\ube44\uc0ad\uc81c")))))},ee=d.a.create({container:{flex:1,flexDirection:"column"},textInputContainer:{marginTop:15,backgroundColor:"#FFF",borderColor:"#d8d8d8",borderWidth:1,borderRadius:8,flexDirection:"row"},textInput:{padding:10,paddingHorizontal:20,textAlign:"left",color:"black",flex:1,fontFamily:"Ubuntu_400Regular"},button:{flex:1,alignItems:"center",justifyContent:"center",padding:15,backgroundColor:x,borderRadius:8},backgroundVideo:{width:400,height:322}}),te=function(e){var t=e.navigation;return i.a.createElement(G,{navigation:t,title:"\ud504\ub85c\ud544"},i.a.createElement(U.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},i.a.createElement(_.a,{onPress:function(){b.auth().signOut()},style:{backgroundColor:"#FF3A3A",padding:10,paddingHorizontal:20,marginTop:10,borderRadius:10}},i.a.createElement(P,{style:{color:"white"},bold:!0},"\ub85c\uadf8\uc544\uc6c3"))))},ne=function(e){var t=e.navigation;return i.a.createElement(G,{navigation:t},i.a.createElement(U.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},i.a.createElement(H.a,{size:"large",color:x})))},ae=n(85),re=function(e){var t=e.navigation,a=Object(c.useState)(""),o=l()(a,2),s=o[0],u=o[1],d=Object(c.useState)(""),m=l()(d,2),g=m[0],p=m[1],y=Object(c.useState)(!1),h=l()(y,2),j=h[0],E=h[1];return i.a.createElement(ae.a,{behavior:"height",enabled:!0,style:{flex:1}},i.a.createElement(f.StatusBar,{style:"auto",translucent:!0,backgroundColor:"#f7f7f7"}),i.a.createElement(G,{navigation:t},i.a.createElement(B.a,{contentContainerStyle:{flexGrow:1}},i.a.createElement(U.a,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f7f7f7"}},i.a.createElement(W.a,{resizeMode:"contain",style:{height:220,width:220},source:n(402)})),i.a.createElement(U.a,{style:{flex:3,paddingHorizontal:20,paddingBottom:20,backgroundColor:"#fff"}},i.a.createElement(P,{bold:!0,style:{fontSize:24,color:w,alignSelf:"center",padding:30}},"Login"),i.a.createElement(P,{style:{color:w,fontSize:16}},"Email"),i.a.createElement(U.a,{style:oe.textInputContainer},i.a.createElement(L.a,{style:oe.textInput,placeholder:"Enter your email",placeholderStyle:{fontFamily:"Ubuntu_400Regular"},value:s,autoCapitalize:"none",autoCompleteType:"off",autoCorrect:!1,keyboardType:"email-address",onChangeText:function(e){return u(e)}})),i.a.createElement(P,{style:{marginTop:15,color:w,fontSize:16}},"Password"),i.a.createElement(U.a,{style:oe.textInputContainer},i.a.createElement(L.a,{style:oe.textInput,placeholder:"Enter your password",placeholderStyle:{fontFamily:"Ubuntu_400Regular"},value:g,autoCapitalize:"none",autoCompleteType:"off",autoCorrect:!1,secureTextEntry:!0,onChangeText:function(e){return p(e)}})),i.a.createElement(_.a,{onPress:function(){r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,r.a.awrap(b.auth().signInWithEmailAndPassword(s,g).catch((function(e){e.code;var t=e.message;E(!1),alert(t)})));case 3:case"end":return e.stop()}}),null,null,null,Promise)},disabled:j,style:{flexDirection:"row",marginTop:20}},i.a.createElement(U.a,{style:oe.button},j?i.a.createElement(H.a,{color:"#fff"}):i.a.createElement(P,{bold:!0,style:{fontSize:16,color:"white"}},"Continue"))),i.a.createElement(U.a,{style:{flexDirection:"row",alignItems:"center",marginTop:15,justifyContent:"center"}},i.a.createElement(P,{style:{color:w}},"Don't have an account?"),i.a.createElement(_.a,{onPress:function(){t.navigate("Register")}},i.a.createElement(P,{bold:!0,style:{marginLeft:5,color:w}},"Register here"))),i.a.createElement(U.a,{style:{flexDirection:"row",alignItems:"center",marginTop:15,justifyContent:"center"}},i.a.createElement(_.a,{onPress:function(){t.navigate("ForgetPassword")}},i.a.createElement(P,{bold:!0,style:{color:w}},"Forget password")))))))},oe=d.a.create({container:{flex:1,flexDirection:"column"},textInputContainer:{marginTop:15,backgroundColor:"#FFF",borderColor:"#d8d8d8",borderWidth:1,borderRadius:8,flexDirection:"row"},textInput:{padding:10,paddingHorizontal:20,textAlign:"left",color:"black",flex:1,fontFamily:"Ubuntu_400Regular"},button:{flex:1,alignItems:"center",justifyContent:"center",padding:15,backgroundColor:x,borderRadius:8}}),le=function(e){var t=e.navigation,a=Object(c.useState)(""),o=l()(a,2),s=o[0],u=o[1],d=Object(c.useState)(""),m=l()(d,2),g=m[0],p=m[1],y=Object(c.useState)(!1),h=l()(y,2),j=h[0],E=h[1];return i.a.createElement(ae.a,{behavior:"height",enabled:!0,style:{flex:1}},i.a.createElement(f.StatusBar,{style:"auto",translucent:!0,backgroundColor:"#f7f7f7"}),i.a.createElement(G,{navigation:t},i.a.createElement(B.a,{contentContainerStyle:{flexGrow:1}},i.a.createElement(U.a,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f7f7f7"}},i.a.createElement(W.a,{resizeMode:"contain",style:{height:220,width:220},source:n(403)})),i.a.createElement(U.a,{style:{flex:3,paddingHorizontal:20,paddingBottom:20,backgroundColor:"#fff"}},i.a.createElement(P,{bold:!0,style:{fontSize:24,color:w,alignSelf:"center",padding:30}},"Register"),i.a.createElement(P,{style:{color:w,fontSize:16}},"Email"),i.a.createElement(U.a,{style:ce.textInputContainer},i.a.createElement(L.a,{style:ce.textInput,placeholder:"Enter your email",placeholderStyle:{fontFamily:"Ubuntu_400Regular"},value:s,autoCapitalize:"none",autoCompleteType:"off",autoCorrect:!1,keyboardType:"email-address",onChangeText:function(e){return u(e)}})),i.a.createElement(P,{style:{marginTop:15,color:w,fontSize:16}},"Password"),i.a.createElement(U.a,{style:ce.textInputContainer},i.a.createElement(L.a,{style:ce.textInput,placeholder:"Enter your password",placeholderStyle:{fontFamily:"Ubuntu_400Regular"},value:g,autoCapitalize:"none",autoCompleteType:"off",autoCorrect:!1,secureTextEntry:!0,onChangeText:function(e){return p(e)}})),i.a.createElement(_.a,{onPress:function(){r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,r.a.awrap(b.auth().createUserWithEmailAndPassword(s,g).catch((function(e){e.code;var t=e.message;E(!1),alert(t)})));case 3:case"end":return e.stop()}}),null,null,null,Promise)},disabled:j,style:{flexDirection:"row",marginTop:20}},i.a.createElement(U.a,{style:ce.button},j?i.a.createElement(H.a,{color:"#fff"}):i.a.createElement(P,{bold:!0,style:{fontSize:16,color:"white"}},"Create an account"))),i.a.createElement(U.a,{style:{flexDirection:"row",alignItems:"center",marginTop:15,justifyContent:"center"}},i.a.createElement(P,{style:{color:w}},"Already have an account?"),i.a.createElement(_.a,{onPress:function(){t.navigate("Login")}},i.a.createElement(P,{bold:!0,style:{marginLeft:5,color:w}},"Login here")))))))},ce=d.a.create({container:{flex:1,flexDirection:"column"},textInputContainer:{marginTop:15,backgroundColor:"#FFF",borderColor:"#d8d8d8",borderWidth:1,borderRadius:8,flexDirection:"row"},textInput:{padding:10,paddingHorizontal:20,textAlign:"left",color:"black",flex:1,fontFamily:"Ubuntu_400Regular"},button:{flex:1,alignItems:"center",justifyContent:"center",padding:15,backgroundColor:x,borderRadius:8}}),ie=function(e){var t=e.navigation,a=Object(c.useState)(""),o=l()(a,2),s=o[0],u=o[1],d=Object(c.useState)(!1),m=l()(d,2),g=m[0],p=m[1];return i.a.createElement(ae.a,{behavior:"height",enabled:!0,style:{flex:1}},i.a.createElement(f.StatusBar,{style:"auto",translucent:!0,backgroundColor:"#f7f7f7"}),i.a.createElement(G,{navigation:t},i.a.createElement(B.a,{contentContainerStyle:{flexGrow:1}},i.a.createElement(U.a,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#f7f7f7"}},i.a.createElement(W.a,{resizeMode:"contain",style:{height:220,width:220},source:n(404)})),i.a.createElement(U.a,{style:{flex:3,paddingHorizontal:20,paddingBottom:20,backgroundColor:"#fff"}},i.a.createElement(P,{bold:!0,style:{fontSize:24,color:w,alignSelf:"center",padding:30}},"Forget Password"),i.a.createElement(P,{style:{color:w,fontSize:16}},"Email"),i.a.createElement(U.a,{style:se.textInputContainer},i.a.createElement(L.a,{style:se.textInput,placeholder:"Enter your email",placeholderStyle:{fontFamily:"Ubuntu_400Regular"},value:s,autoCapitalize:"none",autoCompleteType:"off",autoCorrect:!1,keyboardType:"email-address",onChangeText:function(e){return u(e)}})),i.a.createElement(_.a,{onPress:function(){r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,r.a.awrap(b.auth().sendPasswordResetEmail(s).then((function(){p(!1),t.navigate("Login"),alert("Your password reset has been sent to your email")})).catch((function(e){p(!1),alert(e)})));case 3:case"end":return e.stop()}}),null,null,null,Promise)},disabled:g,style:{flexDirection:"row",marginTop:20}},i.a.createElement(U.a,{style:se.button},g?i.a.createElement(H.a,{color:"#fff"}):i.a.createElement(P,{bold:!0,style:{fontSize:16,color:"white"}},"Send email"))),i.a.createElement(U.a,{style:{flexDirection:"row",alignItems:"center",marginTop:15,justifyContent:"center"}},i.a.createElement(P,{style:{color:w}},"Already have an account?"),i.a.createElement(_.a,{onPress:function(){t.navigate("Login")}},i.a.createElement(P,{bold:!0,style:{marginLeft:5,color:w}},"Login here")))))))},se=d.a.create({container:{flex:1,flexDirection:"column"},textInputContainer:{marginTop:15,backgroundColor:"#FFF",borderColor:"#d8d8d8",borderWidth:1,borderRadius:8,flexDirection:"row"},textInput:{padding:10,paddingHorizontal:20,textAlign:"left",color:"black",flex:1,fontFamily:"Ubuntu_400Regular"},button:{flex:1,alignItems:"center",justifyContent:"center",padding:15,backgroundColor:x,borderRadius:8}}),ue=Object(c.createContext)(),de=function(e){var t=Object(c.useState)(null),n=l()(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){b.auth().onAuthStateChanged((function(e){r(!!e)}))}),[a]),i.a.createElement(ue.Provider,{value:{user:a}},e.children)};0===b.apps.length&&(b.initializeApp({apiKey:"AIzaSyA4TJnh5oss0cfN_aQxKyKDpVNKqy-MJZQ",authDomain:"nemo-led.firebaseapp.com",databaseURL:"https://nemo-led.firebaseio.com",projectId:"nemo-led",storageBucket:"nemo-led.appspot.com",messagingSenderId:"1030745693809",appId:"1:1030745693809:web:86650031d6bf14865745d0"}),b.firestore());var me=Object(h.a)(),fe=function(){return i.a.createElement(me.Navigator,{screenOptions:{headerMode:"none",headerShown:!1}},i.a.createElement(me.Screen,{name:"Login",component:re}),i.a.createElement(me.Screen,{name:"Register",component:le}),i.a.createElement(me.Screen,{name:"ForgetPassword",component:ie}))},ge=Object(h.a)(),pe=function(){return i.a.createElement(ge.Navigator,{screenOptions:{headerMode:"none",headerShown:!1}},i.a.createElement(ge.Screen,{name:"MainTabs",component:ye}),i.a.createElement(ge.Screen,{name:"SecondScreen",component:$}))},be=Object(j.a)(),ye=function(){return i.a.createElement(be.Navigator,{tabBarOptions:{tabStyle:{borderTopWidth:0},style:{borderTopWidth:1,borderColor:"#c0c0c0"},activeTintColor:x}},i.a.createElement(be.Screen,{name:"Home",component:J,options:{tabBarLabel:function(e){var t=e.focused;return i.a.createElement(D,{focused:t,title:"\ub9ac\uc2a4\ud2b8"})},tabBarIcon:function(e){var t=e.focused;return i.a.createElement(T,{focused:t,icon:"md-home"})}}}),i.a.createElement(be.Screen,{name:"Profile",component:te,options:{tabBarLabel:function(e){var t=e.focused;return i.a.createElement(D,{focused:t,title:"\ud504\ub85c\ud544"})},tabBarIcon:function(e){var t=e.focused;return i.a.createElement(T,{focused:t,icon:"ios-contact"})}}}))},he=function(){var e=Object(c.useContext)(ue).user;return i.a.createElement(y.a,null,null==e&&i.a.createElement(ne,null),0==e&&i.a.createElement(fe,null),1==e&&i.a.createElement(pe,null))},je=n(491);function Ee(e){var t=Object(c.useState)(!1),n=l()(t,2),a=n[0],r=n[1];return a||e.skipLoadingScreen?i.a.createElement(je.b,null,i.a.createElement(m.a,{style:ve.container},i.a.createElement(f.StatusBar,{style:"auto",translucent:!0}),i.a.createElement(de,null,i.a.createElement(he,null)))):i.a.createElement(s.a,{startAsync:xe,onError:Ce,onFinish:function(){return function(e){e(!0)}(r)}})}function xe(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(Promise.all([u.a.loadAsync([n(667),n(668),n(402),n(403),n(404)]),g.b({Ubuntu_300Light:p.a,Ubuntu_300Light_Italic:p.b,Ubuntu_400Regular:p.c,Ubuntu_400Regular_Italic:p.d,Ubuntu_500Medium:p.e,Ubuntu_500Medium_Italic:p.f,Ubuntu_700Bold:p.g,Ubuntu_700Bold_Italic:p.h})]));case 2:case"end":return e.stop()}}),null,null,null,Promise)}function Ce(e){console.warn(e)}var ve=d.a.create({container:{flex:1}})},500:function(e,t,n){n(501),e.exports=n(669)},501:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},507:function(e,t,n){var a={"./af":234,"./af.js":234,"./ar":235,"./ar-dz":236,"./ar-dz.js":236,"./ar-kw":237,"./ar-kw.js":237,"./ar-ly":238,"./ar-ly.js":238,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":240,"./ar-sa.js":240,"./ar-tn":241,"./ar-tn.js":241,"./ar.js":235,"./az":242,"./az.js":242,"./be":243,"./be.js":243,"./bg":244,"./bg.js":244,"./bm":245,"./bm.js":245,"./bn":246,"./bn-bd":247,"./bn-bd.js":247,"./bn.js":246,"./bo":248,"./bo.js":248,"./br":249,"./br.js":249,"./bs":250,"./bs.js":250,"./ca":251,"./ca.js":251,"./cs":252,"./cs.js":252,"./cv":253,"./cv.js":253,"./cy":254,"./cy.js":254,"./da":255,"./da.js":255,"./de":256,"./de-at":257,"./de-at.js":257,"./de-ch":258,"./de-ch.js":258,"./de.js":256,"./dv":259,"./dv.js":259,"./el":260,"./el.js":260,"./en-au":261,"./en-au.js":261,"./en-ca":262,"./en-ca.js":262,"./en-gb":263,"./en-gb.js":263,"./en-ie":264,"./en-ie.js":264,"./en-il":265,"./en-il.js":265,"./en-in":266,"./en-in.js":266,"./en-nz":267,"./en-nz.js":267,"./en-sg":268,"./en-sg.js":268,"./eo":269,"./eo.js":269,"./es":270,"./es-do":271,"./es-do.js":271,"./es-mx":272,"./es-mx.js":272,"./es-us":273,"./es-us.js":273,"./es.js":270,"./et":274,"./et.js":274,"./eu":275,"./eu.js":275,"./fa":276,"./fa.js":276,"./fi":277,"./fi.js":277,"./fil":278,"./fil.js":278,"./fo":279,"./fo.js":279,"./fr":280,"./fr-ca":281,"./fr-ca.js":281,"./fr-ch":282,"./fr-ch.js":282,"./fr.js":280,"./fy":283,"./fy.js":283,"./ga":284,"./ga.js":284,"./gd":285,"./gd.js":285,"./gl":286,"./gl.js":286,"./gom-deva":287,"./gom-deva.js":287,"./gom-latn":288,"./gom-latn.js":288,"./gu":289,"./gu.js":289,"./he":290,"./he.js":290,"./hi":291,"./hi.js":291,"./hr":292,"./hr.js":292,"./hu":293,"./hu.js":293,"./hy-am":294,"./hy-am.js":294,"./id":192,"./id.js":192,"./is":295,"./is.js":295,"./it":296,"./it-ch":297,"./it-ch.js":297,"./it.js":296,"./ja":298,"./ja.js":298,"./jv":299,"./jv.js":299,"./ka":300,"./ka.js":300,"./kk":301,"./kk.js":301,"./km":302,"./km.js":302,"./kn":303,"./kn.js":303,"./ko":304,"./ko.js":304,"./ku":305,"./ku.js":305,"./ky":306,"./ky.js":306,"./lb":307,"./lb.js":307,"./lo":308,"./lo.js":308,"./lt":309,"./lt.js":309,"./lv":310,"./lv.js":310,"./me":311,"./me.js":311,"./mi":312,"./mi.js":312,"./mk":313,"./mk.js":313,"./ml":314,"./ml.js":314,"./mn":315,"./mn.js":315,"./mr":316,"./mr.js":316,"./ms":317,"./ms-my":318,"./ms-my.js":318,"./ms.js":317,"./mt":319,"./mt.js":319,"./my":320,"./my.js":320,"./nb":321,"./nb.js":321,"./ne":322,"./ne.js":322,"./nl":323,"./nl-be":324,"./nl-be.js":324,"./nl.js":323,"./nn":325,"./nn.js":325,"./oc-lnc":326,"./oc-lnc.js":326,"./pa-in":327,"./pa-in.js":327,"./pl":328,"./pl.js":328,"./pt":329,"./pt-br":330,"./pt-br.js":330,"./pt.js":329,"./ro":331,"./ro.js":331,"./ru":332,"./ru.js":332,"./sd":333,"./sd.js":333,"./se":334,"./se.js":334,"./si":335,"./si.js":335,"./sk":336,"./sk.js":336,"./sl":337,"./sl.js":337,"./sq":338,"./sq.js":338,"./sr":339,"./sr-cyrl":340,"./sr-cyrl.js":340,"./sr.js":339,"./ss":341,"./ss.js":341,"./sv":342,"./sv.js":342,"./sw":343,"./sw.js":343,"./ta":344,"./ta.js":344,"./te":345,"./te.js":345,"./tet":346,"./tet.js":346,"./tg":347,"./tg.js":347,"./th":348,"./th.js":348,"./tk":349,"./tk.js":349,"./tl-ph":350,"./tl-ph.js":350,"./tlh":351,"./tlh.js":351,"./tr":352,"./tr.js":352,"./tzl":353,"./tzl.js":353,"./tzm":354,"./tzm-latn":355,"./tzm-latn.js":355,"./tzm.js":354,"./ug-cn":356,"./ug-cn.js":356,"./uk":357,"./uk.js":357,"./ur":358,"./ur.js":358,"./uz":359,"./uz-latn":360,"./uz-latn.js":360,"./uz.js":359,"./vi":361,"./vi.js":361,"./x-pseudo":362,"./x-pseudo.js":362,"./yo":363,"./yo.js":363,"./zh-cn":364,"./zh-cn.js":364,"./zh-hk":365,"./zh-hk.js":365,"./zh-mo":366,"./zh-mo.js":366,"./zh-tw":367,"./zh-tw.js":367};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=507},667:function(e,t,n){e.exports=n.p+"static/media/icon.ef89f69f.png"},668:function(e,t,n){e.exports=n.p+"static/media/splash.894e7fd6.png"}},[[500,1,2]]]);
//# sourceMappingURL=app.1cfbf9df.chunk.js.map