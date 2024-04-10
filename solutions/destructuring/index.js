const pizza = {
  toppings: ["cheese", "sauce", "pepperoni"],
  crust: "deep dish",
  serves: 2,
};

const { toppings } = pizza;
const [first, second] = toppings;
console.log(second, first);
