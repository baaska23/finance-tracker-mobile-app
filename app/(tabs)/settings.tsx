import FHeader from "@/components/layout/header";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Collapsible } from "@/components/ui/collapsible";
import { FlatList, StyleSheet, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <FHeader header="Settings" />
      </ThemedView>
      <Collapsible title="Settings types">
        <ThemedText>
          For static images, you can use the{" "}
          <ThemedText type="defaultSemiBold">@2x</ThemedText> and{" "}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to
          provide files for different screen densities
        </ThemedText>
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});