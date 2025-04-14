import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { OrdersScreen } from '@/Order/Presentation/Screens/OrdersScreen';
import { OrderScreen } from '@/Order/Presentation/Screens/OrderScreen';

const { Navigator, Screen } = createNativeStackNavigator()

export function OrderRoutes() {

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="orders"
                component={OrdersScreen}
            />
            <Screen
                name="order"
                component={OrderScreen}
            />
        </Navigator>
    )
}