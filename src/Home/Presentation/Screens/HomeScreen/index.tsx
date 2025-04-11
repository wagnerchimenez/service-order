import { useNavigation } from "@react-navigation/native";


import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as Icon from 'phosphor-react-native'

export function HomeScreen() {

    const navigation = useNavigation()

    return (
        <SafeAreaView className="flex-1 p-2 justify-center">

            <View>

                <View className="flex-row items-center justify-center">
                    <Icon.Car size={150} color="#000" />
                </View>

                <Text
                    className="text-2xl font-bold text-center mb-4"
                >
                    Retífica do Magrão
                </Text>
                <Text
                    className="text-center"
                >
                    Rua Guiana, 1545 Parque das Nações I
                </Text>
                <Text
                    className="text-center"
                >
                    Dourados - MS
                </Text>

                <Text
                    className="text-center"
                >
                    (67) 9614-8186
                </Text>

                <Text
                    className="text-center"
                >
                    retificadomagrao@gmail.com
                </Text>
            </View>




        </SafeAreaView>
    )
}