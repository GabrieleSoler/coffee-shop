import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    checkedPressable: {
        backgroundColor: THEME.COLORS.BRAND_BROWN,
        height: 35,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        color: THEME.COLORS.BASE_WHITE
    },
    pressable: {
        backgroundColor: THEME.COLORS.BASE_LIGHTER_GRAY,
        height: 35,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    container: {
        // backgroundColor: THEME.COLORS.BRAND_BROWN
        flex: 1,
        alignItems: "flex-start"
    },
    title : {
        color: THEME.COLORS.BASE_WHITE,
        fontWeight: "600"
    }
})