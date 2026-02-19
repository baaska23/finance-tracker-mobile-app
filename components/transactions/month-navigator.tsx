import { StyleSheet, View, Text } from "react-native";
import { IconSymbol } from "../ui/icon-symbol";

interface Props {
  currentMonth: Date;
}

export default function MonthNavigator({ currentMonth }: Props) {
  return (
    <View style={styles.container}>
      <IconSymbol size={24} name="chevron.left" color={"white"} />
      <Text style={styles.month}>
        {currentMonth.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </Text>
      <IconSymbol size={24} name="chevron.right" color={"white"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 48,
  },
  month: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
