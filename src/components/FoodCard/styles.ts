import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    cardContainer: {
        width: 153,
        height: 204,
        shadowColor: THEME.COLORS.SHADOW,
        elevation: 5,
        backgroundColor: THEME.COLORS.BASE_WHITE,
        borderRadius: 10,
    },
    container: {
        gap: 10,
    }
})
