import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import {styles} from "./styles"
interface PressButton extends TouchableOpacityProps {
    onPress?: () => void
    title:string
    
}

export function Button({onPress, title}:PressButton){
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.titleButton}>{title}</Text>
        </TouchableOpacity>
    )
}