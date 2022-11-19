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
  ImageBackground,
} from "react-native";

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      {
        name: "Hummus",
        price: "$5.00",
        description:
          "Chickpea blended with the tahini, salt, olive oil and lemon juice with sumac and parsley served with pita bread.",
        image: require("../img/Hummus.png"),
      },
      {
        name: "Moutabal",
        price: "$5.00",
        description:
          "Charcoal grilled Eggplant mixed with Tahina, Lemon, Garlic and olive oil. Ricotta cheeseburger manchego",
        image: require("../img/Moutabal.png"),
      },
      {
        name: "Falafel",
        price: "$7.50",
        description:
          "Deep fried vegan fritters made from ground chick peas, commonly served in pita bread or wrapped in a flatbread with hummus and tahini.",
        image: require("../img/Falafel.png"),
      },
      {
        name: "Marinated Olives",
        price: "$5.00",
        description:
          "Cheesy feet when the cheese comes out everybody's happy say cheese queso mozzarella pecorino cheesy grin pepper jack.",
        image: require("../img/MarinatedOlives.png"),
      },
      {
        name: "Kofta",
        price: "$5.00",
        description:
          "Feta port-salut bocconcini halloumi camembert de normandie pepper jack blue castello taleggio.",
        image: require("../img/Kofta.png"),
      },
      {
        name: "Eggplant Salad",
        price: "$8.50",
        description:
          "Emmental babybel cheese and wine mascarpone mozzarella cheese and biscuits cut the cheese lancashire.",
        image: require("../img/EggplantSalad.png"),
      },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      {
        name: "Lentil Burger",
        price: "$10.00",
        description:
          "When the cheese comes out everybody's happy pepper jack cow.",
        image: require("../img/LentilBurger.png"),
      },
      {
        name: "Smoked Salmon",
        price: "$14.00",
        description:
          "Mascarpone paneer st. agur blue cheese. Bocconcini parmesan caerphilly paneer ricotta roquefort rubber cheese halloumi",
        image: require("../img/SmokedSalmon.png"),
      },
      {
        name: "Kofta Burger",
        price: "$11.00",
        description:
          "Cottage cheese fromage frais cauliflower cheese fondue melted cheese cream cheese cheeseburger edam. Everyone loves cheddar.",
        image: require("../img/KoftaBurger.png"),
      },
      {
        name: "Turkish Kebab",
        price: "$15.50",
        description:
          "Bocconcini blue castello red leicester. Cheese strings cheesy feet mascarpone cheese and wine caerphilly dolcelatte cow cheesy feet.",
        image: require("../img/TurkishBurger.png"),
      },
    ],
  },
  {
    title: "Sides",
    data: [
      {
        name: "Fries",
        price: "$3.00",
        id: "11K",
        description:
          "Mozzarella blue castello fondue cow cheese triangles cheese and biscuits stilton goat. Squirty cheese.",
        image: require("../img/FrenchFries.png"),
      },
      {
        name: "Buttered Rice",
        price: "$3.00",
        description:
          "Taleggio jarlsberg cheese slices. Cheese on toast fromage frais goat pecorino croque monsieur cream cheese squirty cheese cut the cheese.",
        image: require("../img/ButteredRice.png"),
      },
      {
        name: "Bread Sticks",
        price: "$3.00",
        description:
          "Fromage frais gouda stinking bishop cow cottage cheese caerphilly blue castello cut the cheese.",
        image: require("../img/BreadSticks.png"),
      },
      {
        name: "Pita Pocket",
        price: "$3.00",
        description:
          "Fondue camembert de normandie cheese and biscuits caerphilly melted cheese smelly cheese st. agur blue cheese taleggio.",
        image: require("../img/PitaPocket.png"),
      },
      {
        name: "Lentil Soup",
        price: "$3.75",
        description:
          "Ricotta pepper jack macaroni cheese port-salut cheesecake swiss pecorino macaroni cheese.",
        image: require("../img/LentilSoup.png"),
      },
      {
        name: "Greek Salad",
        price: "$6.00",
        description:
          "Roquefort fondue roquefort pepper jack cauliflower cheese macaroni cheese melted cheese fromage frais.",
        image: require("../img/GreekSalad.png"),
      },
      {
        name: "Rice Pilaf",
        price: "$4.00",
        description:
          "Paneer cheese and wine port-salut melted cheese gouda cheesy feet boursin danish fontina. Taleggio emmental.",
        image: require("../img/RicePilaf.png"),
      },
    ],
  },
  {
    title: "Desserts",
    data: [
      {
        name: "Baklava",
        price: "$3.00",
        description:
          "Cheesy feet when the cheese comes out everybody's happy say cheese queso mozzarella pecorino cheesy grin pepper jack.",
        image: require("../img/Baklava.png"),
      },
      {
        name: "Tartufo",
        price: "$3.00",
        description:
          "Feta port-salut bocconcini halloumi camembert de normandie pepper jack blue castello taleggio.",
        image: require("../img/Tartufo.png"),
      },
      {
        name: "Tiramisu",
        price: "$5.00",
        description:
          "Emmental babybel cheese and wine mascarpone mozzarella cheese and biscuits cut the cheese lancashire.",
        image: require("../img/Tiramisu.png"),
      },
      {
        name: "Panna Cotta",
        price: "$5.00",
        description:
          "When the cheese comes out everybody's happy pepper jack cow. Mascarpone paneer st. agur blue cheese.",
        image: require("../img/PannaCotta.png"),
      },
    ],
  },
];

const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;

const Separator = () => <View style={menuStyles.separator} />;

const MenuHeader = () => {
  return (
    <ImageBackground
      style={menuStyles.headerImage}
      source={require("../img/FoodPlateHeroPic.jpg")}
      resizeMode="cover"
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          justifyContent: "center",
          fontFamily: "NotoSerifOriya",
          fontSize: 60,
        }}
      >
        Menu
      </Text>
    </ImageBackground>
  );
};

const ItemSummary = ({ image, description }) => {
  return (
    <>
      <View style={menuStyles.itemSummary}>
        <View style={menuStyles.itemImageContainer}>
          <Image style={menuStyles.itemImage} source={image} />
        </View>
        <View style={menuStyles.itemTextContainer}>
          <Text style={menuStyles.itemSummaryText}>{description}</Text>
        </View>
      </View>
    </>
  );
};

const Item = ({ name, price, image, description }) => {
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
          <ItemSummary image={image} description={description} />
        )}
      </Pressable>
    </>
  );
};

const MenuItems = ({ navigation }) => {
  // const [showMenu, setShowMenu] = React.useState(false);

  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      price={item.price}
      image={item.image}
      description={item.description}
    />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyles.sectionHeader}>
      <Text style={menuStyles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader} // Rendered at the beginning of each existing section in SectionList!
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={MenuHeader} // To add a sticky header rendered ONLY at top of SectionList and will scroll!
      >
        {menuItemsToDisplay}
      </SectionList>
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
    borderBottomColor: "#90b7aa",
    borderWidth: 1,
    // borderColor: "white",
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
    // borderWidth: 2,
    // borderColor: "blue",
  },

  separator: {
    borderBottomWidth: 2,
    borderColor: yellow,
  },

  headerImage: {
    // lets try a <Scroll view around everything, and also to fix border radius and fix login screen issue
    height: 300,
    width: 440,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#495E57",
    borderRadius: 20,
    justifyContent: "center",
  },

  sectionHeader: {
    backgroundColor: "#F4CE14",
    // color: "black",
    fontSize: 25,
    textAlign: "center",
    height: 50,
    borderWidth: 1,
    borderColor: "#F4CE14",
    justifyContent: "center",
  },

  sectionHeaderText: {
    textAlign: "center",
    fontFamily: "NotoSerifOriya",
    paddingTop: 5,
    fontSize: 25,
  },

  button: {
    backgroundColor: "white",
    padding: 15,
    width: 300,
    alignSelf: "center",
    margin: 10,
    borderRadius: 12,
    // borderWidth: 2,
    // borderColor: "#495E57",
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
    // borderWidth: 2,
    // borderColor: "#495E57",
  },

  itemSummary: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 5,
  },

  itemImageContainer: {
    justifyContent: "center",
  },

  itemTextContainer: {
    padding: 10,
    justifyContent: "center",
  },

  itemImage: {
    height: 120,
    width: 100,
    resizeMode: "contain",
    alignSelf: "center",
    // borderWidth: 2,
    // borderColor: "red",
    alignItems: "center",
    marginLeft: 20,
  },

  itemSummaryText: {
    color: "white",
    paddingLeft: 10,
    marginRight: 30,
    paddingRight: 15,

    // borderWidth: 1,
    // borderColor: "white",
    fontSize: 17,
    width: 270,
  },
});
