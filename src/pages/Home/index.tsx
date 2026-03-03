import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import BatLogo from "@/assets/bat-logo.png";
import ModalBatIcon from "@/assets/bat-icon.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "@/components/Button";
import { useState } from "react";
export default function Home() {
  const [view, setView] = useState(false);

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
        <Button onPress={handleButton} />
      </View>
      {view ? showModal() : null}
    </View>
  );
}
