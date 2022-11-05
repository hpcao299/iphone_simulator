import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calculator from './screens/Calculator';
import Home from './screens/Home';
import Timer from './screens/Timer';

const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

export default function App() {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Calculator" component={Calculator} />
                <Stack.Screen name="Timer" component={Timer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
