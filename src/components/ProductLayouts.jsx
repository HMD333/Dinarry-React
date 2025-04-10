import React from "react";

//// Drinks
// cold
import Mango_Juice from "../assets/Drinks/Cold/Mango_Juice.jpg";
import Milk_Coffee from "../assets/Drinks/Cold/Milk_Coffee.jpg";
import Milkshake from "../assets/Drinks/Cold/Milkshake.jpg";
import Mocha from "../assets/Drinks/Cold/Mocha.jpg";
import Mojito from "../assets/Drinks/Cold/Mojito.jpg";

// hot
import Cappuccino from "../assets/Drinks/Hot/Cappuccino.jpg";
import Coffee from "../assets/Drinks/Hot/Coffee.jpg";
import Espresso from "../assets/Drinks/Hot/Espresso.jpg";
import Herbal_Tea from "../assets/Drinks/Hot/Herbal_Tea.jpg";
import Hot_Chocolate from "../assets/Drinks/Hot/Hot_Chocolate.jpg";
import Tea from "../assets/Drinks/Hot/Tea.jpg";

//// Meals
// Breakfast
import English_Stayle from "../assets/Meals/Breakfast/English_Stayle.jpg";
import Filled_Croissants from "../assets/Meals/Breakfast/Filled_Croissants.jpg";
import Nicoise_Salad from "../assets/Meals/Breakfast/Nicoise_Salad.jpg";
import Pancake from "../assets/Meals/Breakfast/Pancake.jpg";
import Strawberry_Proteic_Crepes from "../assets/Meals/Breakfast/Strawberry_Proteic_Crepes.jpg";
import Superfood_Peanut_Butter_Oatmeal_Bowl from "../assets/Meals/Breakfast/Superfood_Peanut_Butter_Oatmeal_Bowl.jpg";

// Lunch
import Burger from "../assets/Meals/Lunch/Burger.jpg";
import L_Nicoise_Salad from "../assets/Meals/Lunch/Nicoise_Salad.jpg";
import Burrito from "../assets/Meals/Lunch/Burrito.jpg";
import Grilled_Garllic_and_Herb_Chicken_and_Veggies from "../assets/Meals/Lunch/Grilled_Garllic_&_Herb_Chicken_&_Veggies.jpg";
import Ramen from "../assets/Meals/Lunch/Ramen.jpg";

// Dinner
import D_Burrito from "../assets/Meals/Dinner/Burrito.jpg";
import D_Burger from "../assets/Meals/Dinner/Burger.jpg";
import Pasta from "../assets/Meals/Dinner/Pasta.jpg";
import D_Nicoise_Salad from "../assets/Meals/Dinner/Nicoise_Salad.jpg";
import D_Grilled_Garllic_and_Herb_Chicken_and_Veggies from "../assets/Meals/Dinner/Grilled_Garllic_&_Herb_Chicken_&_Veggies.jpg";

//// Desserts
import Cannoli from "../assets/Desserts/Cannoli.jpg";
import Cheese_Cake from "../assets/Desserts/Cheese-Cake.jpg";
import Cookies from "../assets/Desserts/Cookies.jpg";
import Cupcakes from "../assets/Desserts/Cupcakes.jpg";
import Macarons from "../assets/Desserts/Macarons.jpg";
import Mini_Cheese from "../assets/Desserts/Mini_Cheese.jpg";

const products = [
  [
    "COLD_Drinks",
    [
      [Mango_Juice, "Mango Juice", "20"],
      [Milk_Coffee, "Milk Coffee", "15"],
      [Milkshake, "Milkshake", "25"],
      [Mocha, "Mocha", "30"],
      [Mojito, "Mojito", "12"],
    ],
  ],
  [
    "HOT_Drinks",
    [
      [Cappuccino, "Cappuccino", "25"],
      [Coffee, "Coffee", "10"],
      [Espresso, "Espresso", "20"],
      [Herbal_Tea, "Herbal Tea", "5"],
      [Hot_Chocolate, "Hot Chocolate", "30"],
      [Tea, "Tea", "3"],
    ],
  ],
  [
    "Desserts",
    [
      [Cannoli, "Cannoli", "83"],
      [Cheese_Cake, "Cheese Cake", "52"],
      [Cookies, "Cookies", "27"],
      [Cupcakes, "Cupcakes", "11"],
      [Macarons, "Macarons", "57"],
      [Mini_Cheese, "Mini Cheese", "15"],
    ],
  ],
  [
    "Meals_Breakfast",
    [
      [English_Stayle, "English Stayle", "23"],
      [Filled_Croissants, "Filled Croissants", "15"],
      [Nicoise_Salad, "Nicoise Salad", "60"],
      [Pancake, "Pancake", "55"],
      [Strawberry_Proteic_Crepes, "Strawberry Proteic Crepes", "5"],
      [
        Superfood_Peanut_Butter_Oatmeal_Bowl,
        "Superfood Peanut Butter Oatmeal Bowl",
        "10",
      ],
    ],
  ],
  [
    "Meals_Lunch",
    [
      [Burger, "Burger", "62"],
      [L_Nicoise_Salad, "Nicoise Salad", "60"],
      [Burrito, "Burrito", "21"],
      [
        Grilled_Garllic_and_Herb_Chicken_and_Veggies,
        "Grilled Garllic & Herb Chicken & Veggies",
        "45",
      ],
      [Ramen, "Ramen", "15"],
    ],
  ],
  [
    "Meals_Dinner",
    [
      [D_Burrito, "Burrito", "21"],
      [D_Burger, "Burger", "62"],
      [Pasta, "Pasta", "65"],
      [D_Nicoise_Salad, "Nicoise Salad", "60"],
      [
        D_Grilled_Garllic_and_Herb_Chicken_and_Veggies,
        "Grilled Garllic & Herb Chicken & Veggies",
        "45",
      ],
    ],
  ],
];

function Product({ img, info, price }) {
  return (
    <div className="relative m-5 h-[380px] w-[280px]">
      <img
        src={img}
        alt={info}
        className="h-[380px] w-[280px] rounded-[5.6px]"
      />
      <div className="top-[300px] absolute inset-0 opacity-80 overflow-hidden bg-[#f4ccc4ca] rounded-b-[5.6px]">
        <p className="font-semibold text-center">{info}</p>
        <div className="font-semibold text-green-700 text-center">{price}$</div>
      </div>
    </div>
  );
}

function ProductLayout({ type }) {
  return (
    <div className="flex">
      {products.map((category, index) => {
        if (type === category[0]) {
          return (
            <div
              key={index}
              className="flex flex-wrap justify-center max-md:m-5 m-16"
            >
              {category[1].map((item, itemIndex) => (
                <Product
                  key={itemIndex}
                  img={item[0]}
                  info={item[1]}
                  price={item[2]}
                />
              ))}
            </div>
          );
        }
        return null; // Return null if the type doesn't match
      })}
    </div>
  );
}

export default ProductLayout;
