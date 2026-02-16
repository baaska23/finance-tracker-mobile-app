import { transactionApi } from "@/services/api/transactionApi";
import { Transaction } from "@/types/transaction";
import { useCallback, useEffect, useState } from "react";

export function useTransactions(month?: number, year?: number) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const loadTransactions = useCallback(async () => {
        try {
            const allTransactions = await transactionApi.getAll();
            setTransactions(allTransactions)
        }
    }, []);

    useEffect(() => {
        loadTransactions()
    }, [loadTransactions])

    return {
        transactionApi
    }
}