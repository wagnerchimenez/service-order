import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamList } from '../Types/types'

import { OrderScreen } from '@/Order/Presentation/Screens/OrderScreen'
import { CustomersScreen } from '@/Customer/Presentation/Screens/CustomersScreen'
import { CustomerScreen } from '@/Customer/Presentation/Screens/CustomerScreen'
import { ServicesScreen } from '@/Service/Presentation/Screens/ServicesScreen'
import { ServiceScreen } from '@/Service/Presentation/Screens/ServiceScreen'
import { OrdersScreen } from '@/Order/Presentation/Screens/OrdersScreen'
import { SettingsScreen } from '@/Settings/Presentation/Screens/SettingsScreen'
import { HomeTabs } from './home.routes'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={HomeTabs}
            />
            <Screen
                name="settings"
                component={SettingsScreen}
            />
            <Screen
                name="orders"
                component={OrdersScreen}
            />
            <Screen
                name="order"
                component={OrderScreen}
            />
            <Screen
                name="services"
                component={ServicesScreen}
            />
            <Screen
                name="service"
                component={ServiceScreen}
            />
            <Screen
                name="customers"
                component={CustomersScreen}
            />
            <Screen
                name="customer"
                component={CustomerScreen}
            />
        </Navigator>
    )
}