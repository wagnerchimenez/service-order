import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamList } from '../Types/types'

// import { Order } from '@/Order/Presentation/Screens/Order'
import { CustomersScreen } from '@/Customer/Presentation/Screens/CustomersScreen'
import { CustomerScreen } from '@/Customer/Presentation/Screens/CustomerScreen'


const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="customers"
                component={CustomersScreen}
            />
            <Screen
                name="customer"
                component={CustomerScreen}
            />
            {/* <Screen
                name="order"
                component={Order}
            /> */}
        </Navigator>
    )
}