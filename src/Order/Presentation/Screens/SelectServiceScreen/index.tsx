import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@/Shared/Infrastructure/Components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";

export function SelectServiceScreen() {

    const navigation = useNavigation()
    const route = useRoute()

    return (
        <SafeAreaView className="flex-1 p-2">
            <Header
                title="Selecionar Serviço"
                onPressBack={() => navigation.navigate('order', route.params)}
            />
        </SafeAreaView>
    )
}