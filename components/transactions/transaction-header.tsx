import { StyleSheet, View, Text } from "react-native";
import DateHeader from "./date-header";

interface Props {
  currentDate: Date;
  income: number;
  expense: number;
}

export default function TransactionHeader({
  currentDate,
  income,
  expense,
}: Props) {
  return (
    <View style={styles.container}>
      <DateHeader currentDate={currentDate} />
      <View style={styles.figures}>
        <Text style={[{ color: "blue" }]}>{income}</Text>
        <Text style={[{ color: "red" }]}>{expense}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 16,
    borderRadius: 8,
  },
  figures: {
    flexDirection: "row",
    padding: 20,
  },
});
