import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  SectionList,
  Pressable,
  Image,
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

const ItemSummary = ({ image }) => {
  return (
    <View style={menuStyles.itemSummary}>
      <View style={menuStyles.itemImageContainer}>
        <Image
          style={menuStyles.itemImage}
          source={require("../img/Picture2.png")}
        />
      </View>
      <View style={menuStyles.itemTextContainer}>
        <Text style={menuStyles.itemSummaryText}>
          Our delicious hummus paste originating in the Middle East that is
          traditionally made of pureed or mashed cooked chickpeas mixed with
          tahini—a toasted sesame condiment—and diced garlic, lemon juice, and
          salt
        </Text>
      </View>
    </View>
  );
};

const Item = ({ name, price, image }) => {
  const [pressed, setPressed] = React.useState(false);
  return (
    <>
      <Pressable
        onPress={() => {
          console.log("This area is pressable!");
          setPressed(!pressed);
          console.log(pressed);
        }}
      >
        <View style={menuStyles.menuItem}>
          <Text style={menuStyles.itemText}>{name}</Text>
          <Text style={menuStyles.itemText}>{price}</Text>
        </View>
        {pressed && (
          // <View>
          //   <Image
          //     style={menuStyles.image}
          //     source={require("../img/Picture2.png")}
          //   />
          // </View>
          <ItemSummary />
        )}
      </Pressable>
    </>
  );
};

const MenuItems = ({ navigation }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  // const [pressed, setPressed] = React.useState(false);

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
      <Pressable
        style={menuStyles.gobackButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={menuStyles.buttonText}>Go back</Text>
      </Pressable>
    </View>
  );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },

  menuItem: {
    flex: 0.75,
    flexDirection: "row",
    paddingVertical: 18,
    paddingHorizontal: 35,
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "white",
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
    borderWidth: 2,
    borderColor: "blue",
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

  gobackButton: {
    backgroundColor: "white",
    padding: 15,
    width: 300,
    alignSelf: "center",
    margin: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#495E57",
  },

  itemSummary: {
    flexDirection: "row",
    padding: 20,
  },

  itemImageContainer: {
    justifyContent: "center",
  },

  itemTextContainer: {
    padding: 10,
  },

  itemImage: {
    height: 100,
    width: 80,
    resizeMode: "contain",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "red",
    alignItems: "center",
  },

  itemSummaryText: {
    color: "white",
    padding: 10,
    marginRight: 20,
    borderWidth: 1,
    borderColor: "white",
  },
});
