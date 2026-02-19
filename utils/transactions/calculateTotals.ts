export function calculateTotals(transactions: number[]) {
    return transactions.reduce((total, value) => total + value, 0);
}