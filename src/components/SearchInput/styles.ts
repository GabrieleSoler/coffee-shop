import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    input: {
      backgroundColor: THEME.COLORS.BASE_WHITE,
      height: 42,
      flex: 1,
    },
    container: {
        height: 50,
        paddingLeft: 20,
    
        backgroundColor: '#fff',
    
        flexDirection: "row",
        alignItems: "center",
    
        borderRadius: 30,
        gap: 8,
        shadowColor: THEME.COLORS.SHADOW,
        elevation: 5,
      },
      icon: {
        backgroundColor: '#B77364',
        width: 40,
        height: 40,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
      }
  });
  