import { Text, TextInput, TextInputProps, View } from "react-native";
import {styles} from "./styles"

interface InputProps extends TextInputProps{
    placeholder:string
    label:string
    style?: object
    multiline?: boolean
    onChangeText?:(text:string) => void
    value?: string
}

export function Input({label, placeholder, keyboardType, style, multiline, onChangeText, value}: InputProps) {

  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}:</Text>
        <TextInput style={[styles.input, style]} onChangeText={onChangeText} placeholder={placeholder} keyboardType={keyboardType} multiline={multiline} value={value}/>
    </View>
  );
}
