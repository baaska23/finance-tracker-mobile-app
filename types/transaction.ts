export type TransactionType = 'income' | 'expense';

export interface Transaction {
    id: string;
    amount: number;
    categoryId: string;
    type: TransactionType;
    date: Date;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateTransactionInput {
    amount: number;
    categoryId: string;
    type: TransactionType;
    description?: string;
    date?: Date
}