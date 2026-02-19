import { StyleSheet, Text, View } from "react-native";

interface Props {
  currentDate: Date;
}

export default function DateHeader({ currentDate }: Props) {
  const dayColors: Record<number, string> = {
    0: "pink", // Sunday
    1: "green", // Monday
    2: "yellow", // Tuesday
    3: "blue", // Wednesday
    4: "red", // Thursday
    5: "gray", // Friday
    6: "orange", // Saturday
  };

  const dayOfWeek = currentDate.getDay();
  const dayColor = dayColors[dayOfWeek];
  const dayOfMonth = currentDate.getDate();
  const dayName = currentDate.toLocaleDateString("en-US", { weekday: "short" });

  return (
    <View style={styles.container}>
      <Text style={styles.dayOfMonth}>{dayOfMonth}</Text>
      <Text style={[styles.dayName, { backgroundColor: dayColor }]}>
        {dayName}
      </Text>
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
  dayOfMonth: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  dayName: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  figures: {
    flexDirection: "row",
    padding: 20,
  },
});
