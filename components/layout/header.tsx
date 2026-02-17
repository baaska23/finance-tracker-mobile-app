import { FTypography } from "@/constants/styles"
import { Text, StyleSheet } from "react-native";

interface Props {
    header: string;
}

export default function FHeader({ header }: Props) {
    return (
        <Text style={styles.headerTitle}>
            {header}
        </Text>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        fontWeight: FTypography.fontWeight.bold,
        fontSize: FTypography.fontSize.medium,
        color: FTypography.color.primary
    },
});