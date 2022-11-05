import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import wallpaper from '../assets/images/wallpaper.jpeg';
import AppLogo from '../components/AppLogo';
import calcLogo from '../assets/images/calculator-app-logo.png';
import timerLogo from '../assets/images/timer-app-logo.png';

const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={wallpaper}
                resizeMode="contain"
                style={{
                    flex: 1,
                }}
            >
                <SafeAreaView>
                    <View
                        style={{ paddingHorizontal: 25, paddingVertical: 10, flexDirection: 'row' }}
                    >
                        <AppLogo imgUrl={calcLogo} title="Calculator" to="Calculator" />
                        <AppLogo imgUrl={timerLogo} title="Clock" to="Clock" />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default Home;
