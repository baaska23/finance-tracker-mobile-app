export type TransactionDTO = {
    id: string,
    amount: number,
    description: string,
    date: Date,
    categoryId: string,
    createdAt: Date,
    updatedAt?: Date
}