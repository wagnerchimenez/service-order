import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamList } from '../Types/types'

import { OrdersScreen } from '@/Order/Presentation/Screens/OrdersScreen';
import { OrderScreen } from '@/Order/Presentation/Screens/OrderScreen';
import { SelectCustomerScreen } from '@/Order/Presentation/Screens/SelectCustomerScreen';
import { SelectServiceScreen } from '@/Order/Presentation/Screens/SelectServiceScreen';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

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
            <Screen
                name="selectCustomer"
                component={SelectCustomerScreen}
            />
            <Screen
                name="selectService"
                component={SelectServiceScreen}
            />
        </Navigator>
    )
}