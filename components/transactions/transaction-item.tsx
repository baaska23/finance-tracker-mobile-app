import { Transaction } from "@/types/transaction";
import { StyleSheet, Text, View } from "react-native";
import TransactionHeader from "./transaction-header";

interface Props {
  transaction: Transaction;
}

export default function TransactionItem({ transaction }: Props) {
  const { categoryId, description, amount, type } = transaction;
  const amountStyle = type === "income" ? "blue" : "red";
  return (
    <View style={styles.container}>
      <Text>{categoryId}</Text>
      <Text>{description}</Text>
      <Text style={[{ color: amountStyle }]}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    color: "black",
  },
});
