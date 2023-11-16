import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';


const Home = () => {
    return (

        <ImageBackground source={require("../assets/images/juice.png")} style={{ width: '100%', height: '100%' }}>
            <View >
                <Image source={require("../assets/images/back.png")} style={{ marginTop: 50, marginLeft: 20, width: 10, zIndex: 1 }} />

                <View style={{ marginLeft: 50, marginTop: 650, width: 350, height: 80, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 10, alignItems: 'center' }}>
                    <Image source={require("../assets/images/small.png")} style={{ marginLeft: 30, width: 40, height: 50, borderRadius: 10 }} />
                    <Text>Orange Juice</Text>
                    <View style={{ backgroundColor: '#5A6CF3', width: 50, alignItems: 'center', height: 50, justifyContent: 'center', borderRadius: 10, marginRight: 30 }}>
                        <Image source={require("../assets/images/cong.png")} style={{ width: 30, height: 30 }} />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};
export default Home;