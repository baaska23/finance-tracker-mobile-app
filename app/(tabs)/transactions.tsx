import AddTransactionButton from "@/components/transactions/add-transaction-button";
import MonthNavigator from "@/components/transactions/month-navigator";
import TransactionSectionList from "@/components/transactions/transaction-section-list";
import TransactionSummaryCard from "@/components/transactions/transaction-summary-card";
import { TransactionService } from "@/services/api/transaction-service";
import { Transaction } from "@/shared/types/transaction";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  currentMonth: Date;
}

export default function TransactionsScreen({
  currentMonth = new Date(),
}: Props) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const data = await TransactionService.getAll();
      setTransactions(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after fetch
    }
  };

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
