import { Transaction } from "@/types/transaction";
import api from "./api";

export const TransactionService = {
  getAll: async (): Promise<Transaction[]> => {
    const {data}  = await api.get<Transaction[]>("/transactions")
    return data
  }
}