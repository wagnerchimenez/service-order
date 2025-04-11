import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { RootStackParamList } from '../Types/types'

import { HomeRoutes } from './home.routes'
import { OrderRoutes } from './order.routes'
import { CustomerRoutes } from './customer.routes'
import { ServiceRoutes } from './service.routes'
import { SettingsRoutes } from './settings.routes'

import * as Icon from 'phosphor-react-native'

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
                name="homeRoutes"
                component={HomeRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon.House size={size} color={color} />
                    ),
                    title: 'Home',
                }}
            />
            <Screen 
                name="ordersRoutes"
                component={OrderRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon.ClipboardText size={size} color={color} />
                    ),
                    title: 'Home',
                }}
            />
            <Screen
                name="customersRoutes"
                component={CustomerRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon.Users size={size} color={color} />
                    ),
                    title: 'Clientes',
                }}
            />
            <Screen
                name="servicesRoutes"
                component={ServiceRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon.Wrench size={size} color={color} />
                    ),
                    title: 'Serviços',
                }}
            />
            <Screen
                name="settingsRoutes"
                component={SettingsRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon.Gear size={size} color={color} />
                    ),
                    title: 'Configurações',
                }}
            />
        </Navigator>
    )
}