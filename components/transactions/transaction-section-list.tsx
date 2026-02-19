import { StyleSheet, View, Text } from "react-native";
import TransactionHeader from "./transaction-header";
import TransactionItem from "./transaction-item";
import { Transaction } from "@/types/transaction";
import { FlatList } from "react-native";

interface Props {
    transactions: Transaction[]
}

export default function TransactionSectionList({ transactions }: Props) {
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

console.log("Transactions length", transactions.length)

  if (transactions.length === 0) {
    return (
      <View style={styles.container}>
        <TransactionHeader currentDate={new Date()} income={0} expense={0} />
        <Text style={styles.emptyText}>No transactions available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TransactionHeader
        currentDate={transactions[0]?.createdAt || new Date()}
        income={income}
        expense={expense}
      />
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginTop: 20,
  },
});
