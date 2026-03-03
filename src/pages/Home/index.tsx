import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import BatLogo from "@/assets/bat-logo.png";
import ModalBatIcon from "@/assets/bat-icon.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "@/components/Button";
import { useState } from "react";
import { Input } from "@/components/Input";
export default function Home() {
  const [view, setView] = useState(false);
  const [name, setName] = useState("")
  const [contat, setContat] = useState("")
  const [localization, setLocalization] = useState("")
  const [observations, setObservations] = useState("")
  

  function showModal() {
    return (
      <Modal style={styles.overlay}>
        <View style={styles.containerWhite}>
          <View style={styles.navBar}>
            <Image source={ModalBatIcon} width={50} height={50} />
            <TouchableOpacity onPress={handleButton}>
              <MaterialIcons name="exit-to-app" size={40} color={"#000"} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.forms}>
            <Input label="Nome" placeholder="Digite seu nome" value={name} onChangeText={setName}/>
            <Input label="Tel. para Contato" placeholder="Digite o telefone" keyboardType="phone-pad" value={contat} onChangeText={setContat}/>
            <Input label="Localização" placeholder="Digite sua localização atual" value={localization} onChangeText={setLocalization}/>
            <Input style={styles.observations} label="Observações" placeholder="Observações..." multiline={true} value={observations} onChangeText={setObservations}/>
          </ScrollView>
          <Text>{}</Text>
          <Button title="Enviar" onPress={() => console.log(`
            Nome: ${name}
            Tel.: ${contat}
            Localização: ${localization}
            Obs.: ${observations}
            `)}/>
        </View>
      </Modal>
    );
  }

  function handleButton() {
    setView(!view);
    console.log(view);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={BatLogo}></Image>

      <View style={styles.card}>
        <Text style={styles.titleCard}>CHAMA O BATMAN FI</Text>
        <Button title="CALL THE BATMAN" onPress={handleButton} />
      </View>
      {view ? showModal() : null}
    </View>
  );
}
