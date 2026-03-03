import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import {styles} from "./styles"
interface PressButton extends TouchableOpacityProps {
    onPress: () => void
}

export function Button({onPress}:PressButton){
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.titleButton}>CALL THE BATMAN</Text>
        </TouchableOpacity>
    )
}