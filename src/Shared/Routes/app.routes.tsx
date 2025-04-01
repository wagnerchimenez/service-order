import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Order } from '@/Order/Presentation/Screens/Order'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            {/* <Screen
                name="home"
                component={Home}
            /> */}
            <Screen
                name="order"
                component={Order}
            />
        </Navigator>
    )
}