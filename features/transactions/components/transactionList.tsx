import { useTransactions } from "@/hooks/transactions/useTransactions";
import { ActivityIndicator } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";

interface Props {
    month?: number;
    year?: number;
}

export function TransactionList({month, year}: Props) {
    const {transactions, loading, error, refresh} = useTransactions(month, year);

    if (loading && transactions.length === 0) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size={"large"} />
            </View>
        )
    }
}
const styles = {
    centered: {
        flex: 1,
        justifyContent: 'center'
    }
}