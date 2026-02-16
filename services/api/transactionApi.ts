import { TransactionType, CreateTransactionInput, Transaction } from "@/types/transaction";

const STORAGE_KEY = '@finance_tracker:transactions';

export const transactionApi = {
  async getAll(): Promise<Transaction[]> {
    try {
      const json = await AsyncStorage.getItem(STORAGE_KEY);
      if (!json) return [];
      
      const data = JSON.parse(json);
      // Convert date strings back to Date objects
      return data.map((t: any) => ({
        ...t,
        date: new Date(t.date),
        createdAt: new Date(t.createdAt),
        updatedAt: new Date(t.updatedAt),
      }));
    } catch (error) {
      console.error('Failed to load transactions:', error);
      return [];
    }
  },

  async getById(id: string): Promise<Transaction | null> {
    const transactions = await this.getAll();
    return transactions.find(t => t.id === id) || null;
  },

  async create(input: CreateTransactionInput): Promise<Transaction> {
    const transactions = await this.getAll();
    
    const newTransaction: Transaction = {
      id: uuidv4(),
      ...input,
      date: input.date || new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const updated = [...transactions, newTransaction];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    
    return newTransaction;
  },
}