const userInfo = {
  name: "Taro",
  age: 18,
};

const addCategory = (user) => {
  const category = user.age >= 20 ? "adult" : "minor";
  return { ...user, category };
};

const addIsActiveFlag = (user) => {
  return { ...user, isActive: true };
};

const addGreeting = (user) => {
  return { ...user, greeting: "Hello " + user.name };
};

const steps = [addCategory, addIsActiveFlag, addGreeting];

const result = steps.reduce((acc, fn) => fn(acc), userInfo);

console.log(result);
