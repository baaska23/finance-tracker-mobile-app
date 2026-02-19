import { StyleSheet, View, Text } from "react-native";

interface Props {
  income: number;
  expense: number;
}
export default function TransactionSummaryCard({
  income,
  expense,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.columns}>
        <Text>Income</Text>
        <Text>{income}</Text>
      </View>
      <View style={styles.columns}>
        <Text>Expense</Text>
        <Text>{expense}</Text>
      </View>
      <View style={styles.columns}>
        <Text>Total</Text>
        <Text>{income - expense}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "auto",
  },
  columns: {
    flexDirection: "column",
    alignItems: "center",
  },
});
