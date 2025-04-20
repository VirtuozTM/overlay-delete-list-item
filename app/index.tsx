import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useImmersiveOverlay } from "@/stores/overlayStore";
import Animated, {
  ZoomIn,
  ZoomOut,
  FadeInDown,
  LinearTransition,
} from "react-native-reanimated";
import { data } from "@/constants/data";

type Item = {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
};

const index = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [items, setItems] = useState<Item[]>(data);
  const [refreshing, setRefreshing] = useState(false);
  const { immerse, dismiss } = useImmersiveOverlay();

  const toggleSelection = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleDelete = () => {
    console.log(selectedItems);
    setItems(items.filter((item) => !selectedItems.includes(item.id)));
    setSelectedItems([]);
    dismiss();
  };

  const renderItem = ({ item }: { item: Item }) => {
    const isSelected = selectedItems.includes(item.id);
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => toggleSelection(item.id)}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.iconContainer}>{item.icon}</View>
          <View style={styles.itemContent}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        </View>
        {isSelected && (
          <Animated.View
            entering={ZoomIn}
            exiting={ZoomOut}
            style={styles.iconContainerSelected}
          >
            <AntDesign name="check" size={15} color="white" />
          </Animated.View>
        )}
      </TouchableOpacity>
    );
  };

  const withComponentExampleFn = () => {
    immerse({
      component: (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 36,
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 20,
              gap: 15,
            }}
          >
            <Text style={{ color: "black", fontSize: 24, fontWeight: "bold" }}>
              {selectedItems.length} items
            </Text>
            <Text
              style={{
                color: "gray",
                fontSize: 15,
                fontWeight: "medium",
                textAlign: "justify",
              }}
            >
              Are you sure you want to delete these entries? You can't undo this
              action.
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              paddingVertical: 20,
              paddingHorizontal: 30,
              borderRadius: 30,
            }}
            onPress={() => {
              handleDelete();
            }}
          >
            <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
              Delete
            </Text>
          </TouchableOpacity>
          <Pressable
            style={{
              backgroundColor: "transparent",
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 10,
            }}
            onPress={() => {
              dismiss();
            }}
          >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Cancel
            </Text>
          </Pressable>
        </View>
      ),
      colors: {
        primary: "#FF0000",
        secondary: "#8B0000",
        expanding: {
          dark: ["#FF0000", "#B22222", "#8B0000"],
          light: ["#FF6347", "#DC143C", "#CD5C5C"],
        },
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {selectedItems.length > 0 && (
        <Animated.View
          style={styles.header}
          entering={FadeInDown.duration(200)}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Pressable
              style={styles.headerIcon}
              onPress={() => setSelectedItems([])}
            >
              <AntDesign name="close" size={17.5} color="white" />
            </Pressable>
            <Text style={styles.counterText}>{selectedItems.length}</Text>
          </View>
          <Pressable style={styles.headerIcon} onPress={withComponentExampleFn}>
            <MaterialIcons name="delete-outline" size={17.5} color="white" />
          </Pressable>
        </Animated.View>
      )}

      <Animated.FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        itemLayoutAnimation={LinearTransition}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => {
                setItems(data);
                setRefreshing(false);
              }, 1000);
            }}
            colors={["#5f566f"]}
            tintColor="#5f566f"
          />
        }
      />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08001b",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerIcon: {
    backgroundColor: "#5f566f",
    padding: 10,
    borderRadius: 20,
  },
  item: {
    backgroundColor: "#1c1b43",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  itemText: {
    color: "#fff",
  },
  iconContainer: {
    backgroundColor: "#130f39",
    padding: 10,
    borderRadius: 20,
    alignItems: "flex-start",
  },
  iconContainerSelected: {
    backgroundColor: "#09001b",
    padding: 7.5,
    borderRadius: 20,
  },
  itemDescription: {
    color: "#685f7b",
    fontSize: 12,
  },
  itemContent: {
    flex: 1,
    maxWidth: "75%",
    gap: 5,
    marginLeft: 10,
  },
  counterText: {
    color: "white",
    fontWeight: "bold",
  },
});
