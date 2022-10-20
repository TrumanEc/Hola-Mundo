import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola mundo</Text>
      <StatusBar style="auto" />
      <Text>
        U2. Actividad de aprendizaje para RA: Actividad 4. Configurando un IDE y
        Github - App Hola Mundo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: "40rem",
    fontWeight: "700",
    color: "dodgerblue",
    borderStyle: "solid",
    borderColor: "dodgerblue",
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 50,
  },
});
