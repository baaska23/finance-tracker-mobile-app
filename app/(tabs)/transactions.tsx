import AddTransactionButton from "@/components/transactions/add-transaction-button";
import MonthNavigator from "@/components/transactions/month-navigator";
import TransactionSectionList from "@/components/transactions/transaction-section-list";
import TransactionSummaryCard from "@/components/transactions/transaction-summary-card";
import { TransactionService } from "@/services/api/transaction-service";
import { Transaction } from "@/types/transaction";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "@heroui/react";
import { Avatar, Card, Skeleton } from 'heroui-native';
import { Image, Text, View } from 'react-native';

interface Props {
  currentMonth: Date;
}

export default function TransactionsScreen({
  currentMonth = new Date(),
}: Props) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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
      {/* <TransactionSectionList transactions={transactions} /> */}
      <AddTransactionButton></AddTransactionButton>
      <Button>HeroUIButton</Button>
      <Card className="p-4">
      <View className="flex-row items-center gap-3 mb-4">
        <Skeleton isLoading={isLoading} className="h-10 w-10 rounded-full">
          <Avatar size="sm" alt="Avatar">
            <Avatar.Image source={{ uri: 'https://i.pravatar.cc/150?img=4' }} />
            <Avatar.Fallback />
          </Avatar>
        </Skeleton>
        <View className="flex-1 gap-1">
          <Skeleton isLoading={isLoading} className="h-3 w-32 rounded-md">
            <Text className="font-semibold text-foreground">John Doe</Text>
          </Skeleton>
          <Skeleton isLoading={isLoading} className="h-3 w-24 rounded-md">
            <Text className="text-sm text-muted">@johndoe</Text>
          </Skeleton>
        </View>
      </View>
      <Skeleton
        isLoading={isLoading}
        className="h-48 w-full rounded-lg"
        animation={{
          shimmer: {
            duration: 1500,
            speed: 1,
          },
        }}
      >
        <View className="h-48 bg-surface-tertiary rounded-lg overflow-hidden">
          <Image
            source={{
              uri: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/backgrounds/cards/car1.jpg',
            }}
            className="h-full w-full"
          />
        </View>
      </Skeleton>
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
  },
});
