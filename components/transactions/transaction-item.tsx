import { Transaction } from "@/types/transaction";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  transaction: Transaction;
}

export default function TransactionItem({ transaction }: Props) {
  const { categoryId, description, amount, type } = transaction;

  console.log("Transaction Item Data: ", transaction);

  const amountStyle = type === "income" ? "blue" : "red";
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{categoryId}</Text>
      <Text style={styles.description}>{description}</Text>
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
    backgroundColor: "#ffffff",
  },
  description: {
    color: "#000000",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  income: {
    color: "green",
  },
  expense: {
    color: "red",
  },
});
