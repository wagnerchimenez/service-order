import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '@/Home/Presentation/Screens/HomeScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export function HomeRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={HomeScreen}
            />
        </Navigator>
    )
}