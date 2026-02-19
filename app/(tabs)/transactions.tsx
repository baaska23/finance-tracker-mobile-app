import AddTransactionButton from "@/components/transactions/add-transaction-button";
import MonthNavigator from "@/components/transactions/month-navigator";
import TransactionSectionList from "@/components/transactions/transaction-section-list";
import TransactionSummaryCard from "@/components/transactions/transaction-summary-card";
import { Transaction } from "@/types/transaction";
import { StyleSheet, View } from "react-native";

interface Props {
  currentMonth: Date;
}

export default function TransactionsScreen({
  currentMonth = new Date(),
}: Props) {
  const transactions: Transaction[] = [
    {
      id: "1",
      amount: 100,
      categoryId: "Food",
      type: "income",
      date: new Date(),
      description: "Salary",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      amount: 50,
      categoryId: "Transport",
      type: "expense",
      date: new Date(),
      description: "Bus ticket",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  return (
    <View style={styles.container}>
      <MonthNavigator currentMonth={currentMonth} />
      <TransactionSummaryCard income={12000} expense={10000} />
      <TransactionSectionList transactions={transactions} />
      <AddTransactionButton></AddTransactionButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
  },
});
