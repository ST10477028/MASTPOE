// Code Atrributes:
// Author: w3schools
// Title: Typescript
// Date published: Copyright 1999-2025
// Link: https:/www.w3schools.com/typescript/
// Date accessed: 2025/11/10

import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { menuItem, Course, RootStackParamlist } from "./type";
import WelcomeScreen from "./screens/WelcomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import FilterScreen from "./screens/FilterScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator<RootStackParamlist>();

const predefined: menuItem[] = [
  {
    id: "1",
    itemName: "Crispy Fried Calamari with Smoked Paprika & Lemon",
    description: "Tender rings of calamari, soaked in buttermilk and fried to a perfect golden crisp. Tossed in a smoky paprika salt and served with a generous wedge of fresh lemon for squeezing.",
    category: "STARTER",
    price: 135,
    intensity: "Balanced",
    image: "https://restaurantassociates.co.uk/media/njtblojw/brindisa-07.jpg",
    ingredients: ["Calamari Rings", "Butter Milk", "Smoked Paprika", "Lemon"],
  },
  {
    id: "2",
    itemName: "Whipped Feta & Roasted Cherry Tomatoes on Sourdough",
    description: "Creamy, tangy feta whipped with Greek yoghurt until light and fluffy. Topped with a mess of sweet, roasted cherry tomatoes that burst in your mouth. Served on thick, grilled sourdough.",
    category: "STARTER",
    price: 100,
    intensity: "Bold",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0mAMP1JnbxrvABO2zJKu9fAPeWCLJxVnrA&s",
    ingredients: ["Feta Cheese", "Sourdough bread", "Greek Yoghurt", "Cherry Tomatoes"],
  },
  {
    id: "3",
    itemName: "Garlic Butter Prawns",
    description: "Juicy, seared tiger prawns sizzling in a pan with a generous amount of garlic butter and a dash of white wine. Finished with a handful of fresh parsley and served with crusty bread to soak up every last drop of that irresistible sauce.",
    category: "STARTER",
    price: 85,
    intensity: "Mild",
    image: "https://www.recipetineats.com/uploads/2020/09/Creamy-Garlic-Prawns_7.jpg",
    ingredients: ["Tiger Prawns", "Garlic", "Fresh Parsley", "White wine"],
  },

  {
    id: "4",
    itemName: "Herb-Roasted Chicken with Crispy Potatoes & Pan Jus",
    description: "A perfectly roasted whole chicken leg with crackling-crisp skin and juicy, herb-infused meat. Served atop a bed of golden, crispy potatoes roasted in the chicken drippings with garlic and thyme.",
    category: "MAIN",
    price: 115,
    intensity: "Mild",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsw4q63lNn5shxB75RDX4v9Mu8zGJ46cMTVA&s",
    ingredients: ["Chicken", "Potato", "Garlic", "rosemary"],
  },
  {
    id: "5",
    itemName: "Beer-Battered Fish & Triple-Cooked Chips",
    description: "A British classic, done properly. A generous, flaky fillet of cod encased in an impossibly light and crisp beer batter. Served alongside a heap of triple-cooked chips ,fluffy on the inside, glass-like and crunchy on the outside ,with a side of proper minted mushy peas and tartare sauce.",
    category: "MAIN",
    price: 110,
    intensity: "Mild",
    image: "https://grandbaby-cakes.com/wp-content/uploads/2023/04/fish-and-chips-recipe.jpg",
    ingredients: ["Cod Fillet", "light beer", "Mushy peas", "Potato"],
  },
  {
    id: "6",
    itemName: "8-hour Slow-Roasted Pork Belly with Apple & Sage",
    description: "Pork belly slow-roasted for hours until the fat is rendered, the meat is fall-apart tender, and the crackling is perfectly blistered and salty. Served with a sharp, creamy Bramley apple sauce and a rich gravy infused with fresh sage and a hint of fennel.",
    category: "MAIN",
    price: 210,
    intensity: "Balanced",
    image: "https://crushmag-online.com/wp-content/uploads/2024/11/SAPPOxCapeHerb-and-Spice_PorchettaRoll_1x65.jpg",
    ingredients: ["Pork Belly", "Apple", "Sage", "Fennel"],
  },
  {
    id: "7",
    itemName: "Seared Ribeye Steak with Creamy Peppercorn Sauce & Fries",
    description: "A beautifully marbled ribeye steak, seared to your liking to create a caramelised crust and a juicy, pink interior. Resting in a pool of rich, creamy peppercorn sauce, made with a splash of cognac and crushed mixed peppercorns for a robust kick. Served with a mountain of golden, skin-on fries and a simple side salad",
    category: "MAIN",
    price: 185,
    intensity: "Balanced",
    image: "https://justcook.butcherbox.com/wp-content/uploads/2024/09/Ribeye-with-Black-Peppercorn-Sauce-1.jpg",
    ingredients: ["Ribeye steak", "Mixed peppercorns", "Cognac", "Double Cream"],
  },
  {
    id: "8",
    itemName: "Sticky Toffee Pudding with Vanilla Bean Ice Cream",
    description: "A warm, moist date sponge cake, smothered in a rich, buttery toffee sauce that soaks into every bite. Served steaming from the oven with a generous scoop of melting, real vanilla bean ice cream that creates the perfect hot-and-cold contrast.",
    category: "DESSERT",
    price: 85,
    intensity: "Mild",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9GLEIdV_hg9W2BFNYXeoWE43ZmRQbpaQqw&s",
    ingredients: ["Medjool dates", "Dark muscovado sugar", "Vanilla bean ice cream", "Toffee sauce"],
  },
  {
    id: "9",
    itemName: "Warm Chocolate Brownie & Salted Caramel Sauce",
    description: "A dense, fudgy, and intensely chocolatey brownie, served warm so it's gloriously gooey in the middle. Drizzled with a rich, homemade salted caramel sauce that balances sweet and salty perfectly.",
    category: "DESSERT",
    price: 75,
    intensity: "Mild",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYff9uFrnDQSlUOKEYCiE_4J7Rbs9qcU0ypQ&s",
    ingredients: ["Dark chocolate", "Sea salt flakes", "Sugar", " Caramel"],
  },
  {
    id: "10",
    itemName: "Lemon Posset with Raspberry Compote & Shortbread",
    description: "Incredibly simple, yet stunningly sharp and creamy. This classic posset is a velvety set cream bursting with fresh, zingy lemon flavour. Topped with a vibrant, slightly tart raspberry compote and served with two delicate, buttery shortbread biscuits for dipping.",
    category: "DESSERT",
    price: 95,
    intensity: "Balanced",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvISgtkOcPn62gWz-3uCA5FWPsOfVNeTv0g&s",
    ingredients: ["Double cream", "Fresh lemons", "Raspberries", "Shortbread biscuits"],
  },
];

export default function App() {
  const [items, setItems] = useState<menuItem[]>(predefined);

  const addItem = (item: menuItem) => setItems((prev) => [...prev, item]);
  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const avg = (course: Course) => {
    const list = items.filter((i) => i.category === course);
    if (!list.length) return "0.00";
    const total = list.reduce((sum, i) => sum + i.price, 0);
    return (total / list.length).toFixed(2);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1a1525" },
          headerTintColor: "#e6e6fa",
          headerTitleStyle: { fontWeight: "800" },
        }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="HomeScreen" options={{ title: "Chef Christoffel's Kitchen" }}>
          {(props) => (
            <HomeScreen
              {...props}
              items={items}
              removeItem={removeItem}
              averages={{
                STARTER: avg("STARTER"),
                MAIN: avg("MAIN"),
                DESSERT: avg("DESSERT"),
              }}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="AddItemScreen" options={{ title: "Add New Item" }}>
          {(props) => <AddItemScreen {...props} addItem={addItem} />}
        </Stack.Screen>

        <Stack.Screen name="Filter" options={{ title: "Filter Menu" }}>
          {(props) => <FilterScreen {...props} items={items} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}