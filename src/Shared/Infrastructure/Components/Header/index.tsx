import { Text, TouchableOpacity, View } from "react-native";
import * as Icon from "phosphor-react-native";

type HeaderProps = {
    title: string
    onPressBack?: () => void
    onPressForward?: () => void
}

export function Header({ title, onPressBack, onPressForward }: HeaderProps) {
    return (
        <View className="flex-row items-center gap-2">

            {onPressBack && (
                <TouchableOpacity
                    onPress={onPressBack}
                >
                    <Icon.CaretLeft weight="bold" size={20} />
                </TouchableOpacity>
            )}

            <Text
                className="text-4xl font-bold mt-4 mb-4"
            >
                {title}
            </Text>

            {onPressForward && (
                <TouchableOpacity
                    onPress={onPressForward}
                >
                    <Icon.CaretRight weight="bold" size={20} />
                </TouchableOpacity>
            )}

        </View>
    )
}