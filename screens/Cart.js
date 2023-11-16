import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';


const Home = () => {
    return (
        <View style={{ marginLeft: 20 }}>
            <Image source={require("../assets/images/backO.png")} style={{ marginTop: 50, marginLeft: 20, width: 10, zIndex: 1 }} />
            <Text style={{ fontWeight: '600', fontSize: 20, marginTop: 30 }}>Your Cart</Text>
            <View style={{marginTop:30}}>
                <View style={{ backgroundColor: '#F8F8FB', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 20, width: 370, height: 100 }}>
                    <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                        <Image source={require("../assets/images/small.png")} style={{ width: 60, height: 70 }} />
                        <View style={{marginLeft:10}}>
                            <Text>Laurr</Text>
                            <Text>Orange</Text>
                            <Text>149</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 50 }}>
                        <Text>-</Text>
                        <Text>3</Text>
                        <Text>+</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:20}}>
                <View style={{ backgroundColor: '#F8F8FB', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 20, width: 370, height: 100 }}>
                    <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                        <Image source={require("../assets/images/small2.png")} style={{ width: 60, height: 70 }} />
                        <View style={{marginLeft:10}}>
                            <Text>Laurr</Text>
                            <Text>Orange</Text>
                            <Text>149</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 50 }}>
                        <Text>-</Text>
                        <Text>3</Text>
                        <Text>+</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:20}}>
                <View style={{ backgroundColor: '#F8F8FB', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 20, width: 370, height: 100 }}>
                    <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                        <Image source={require("../assets/images/small3.png")} style={{ width: 60, height: 70 }} />
                        <View style={{marginLeft:10}}>
                            <Text>Laurr</Text>
                            <Text>Orange</Text>
                            <Text>149</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 50 }}>
                        <Text>-</Text>
                        <Text>3</Text>
                        <Text>+</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:30, justifyContent:'space-between', flexDirection:'row', width:360}}>
                <Text style={{fontSize:20}}>Total</Text>
                <Text>1,534</Text>
            </View>
            <View style={{marginTop:20 ,width:360,height:60 ,backgroundColor:'#F08F5F', justifyContent:'center', alignItems:'center', borderRadius:20}}>
                <Text style={{color:'#FFF', fontSize:15}}>Proceed to checkout</Text>
            </View>
        </View>
    );
};
export default Home;