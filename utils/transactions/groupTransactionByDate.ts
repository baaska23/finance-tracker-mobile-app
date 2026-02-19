import { Transaction } from "@/types/transaction"

export default function groupTransactionsByDate(transactions: Transaction[]) {
    return transactions.reduce((grouped, transaction) => {
        const dateKey = transaction.date.toISOString().split('T')[0]; // Group by date (YYYY-MM-DD)
        if (!grouped[dateKey]) {
            grouped[dateKey] = [];
        }
        grouped[dateKey].push(transaction);
        return grouped;
    }, {} as Record<string, Transaction[]>);
}