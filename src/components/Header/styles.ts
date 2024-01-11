import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      gap: 50
    },
    containerFilter: {
        gap: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",  
        color: THEME.COLORS.BASE_MEDIUM_GRAY
    }
  });