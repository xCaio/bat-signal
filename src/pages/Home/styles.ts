import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000da"
    },
    image:{
        marginHorizontal: "auto",
        position: "absolute",
        left: 0
    },
    card:{
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        height: 300,
        backgroundColor: "#0b0c0157",
        position: "relative",
        top: 150,
        borderRadius: 10,
        boxShadow: "#000",
        color: "#FFF",
        paddingVertical: 15
    },
    titleCard:{
        fontSize: 20,
        color: "#FFF",
        justifyContent: "flex-end",
        marginTop: 50
    },
    containerWhite:{
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        padding: 25,
        borderRadius: 12,
        alignItems: "center",
    },
    overlay:{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
    },
    navBar:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    forms:{
        width: "100%",
        marginTop: 30
    },
    observations:{
        height: 100,
        textAlign: "left",
        
    }
})