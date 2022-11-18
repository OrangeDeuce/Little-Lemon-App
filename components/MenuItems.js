import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  SectionList,
  Pressable,
} from "react-native";

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;

const Separator = () => <View style={menuStyles.separator} />;

const Item = ({ name, price }) => {
  return (
    <View style={menuStyles.menuItem}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  );
};

const MenuItems = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const renderItem = ({ item, price }) => (
    <Item name={item.name} price={item.price} />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={menuStyles.container}>
      {!showMenu && (
        <Text style={menuStyles.intro}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and cocktails in a lively but casual environment. View our menu to
          explore our cuisines with daily specials!
        </Text>
      )}
      <Pressable
        style={menuStyles.button}
        onPress={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Text style={menuStyles.buttonText}>
          {showMenu ? "Home" : "View Menu"}
        </Text>
      </Pressable>
      {showMenu && (
        <SectionList
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ItemSeparatorComponent={Separator}
        >
          {menuItemsToDisplay}
        </SectionList>
      )}
    </View>
  );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },

  menuItem: {
    flex: 0.75,
    flexDirection: "row",
    paddingVertical: 18,
    paddingHorizontal: 35,
    justifyContent: "space-between",
  },

  headerText: {
    fontSize: 40,
    flexWrap: "wrap",
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
  },

  itemText: {
    color: yellow,
    fontSize: 20,
  },

  separator: {
    borderBottomWidth: 1,
    borderColor: yellow,
  },

  sectionHeader: {
    backgroundColor: "#F4CE14",
    color: "black",
    fontSize: 25,
    textAlign: "center",
  },

  button: {
    backgroundColor: "white",
    padding: 15,
    width: 300,
    alignSelf: "center",
    margin: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#495E57",
  },

  buttonText: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },

  intro: {
    fontSize: 25,
    textAlign: "center",
    padding: 30,
    color: "white",
  },
});
