import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        gap: 20,
        flexDirection: "row",
        marginTop: 50,
    }, 
    containerFilter: {
        gap: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",  
        color: THEME.COLORS.BASE_MEDIUM_GRAY
    },
})
