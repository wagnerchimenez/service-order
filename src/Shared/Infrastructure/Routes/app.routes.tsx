import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import { Order } from '@/Order/Presentation/Screens/Order'
import { Customers } from '@/Customer/Presentation/Screens/Customers'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="customer"
                component={Customers}
            />
            {/* <Screen
                name="order"
                component={Order}
            /> */}
        </Navigator>
    )
}