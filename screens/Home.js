import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


const Home = () => {
    return (
        <View style={{ marginHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
                <View>
                    <Text style={{ fontWeight: '600', fontSize: 20 }}>Hello</Text>
                    <Text>Chistie Doe</Text>
                </View>
                <View>
                    <Image source={require("../assets/images/adminHome.png")} style={{ borderRadius: 10 }} />
                </View>
            </View>
            <Text style={{ marginTop: 20, fontSize: 18 }}>Your Insights</Text>
            <View style={{flexDirection:'row', }}>
                <Image source={require("../assets/images/scan.png")} style={{ borderRadius: 10 }} />
                <Image source={require("../assets/images/error.png")} style={{ borderRadius: 10 }} />
                <Image source={require("../assets/images/tick.png")} style={{ borderRadius: 10 }} />
                <Image source={require("../assets/images/Cart.png")} style={{ borderRadius: 10 }} />
            </View>
        </View>

    );
};
export default Home;