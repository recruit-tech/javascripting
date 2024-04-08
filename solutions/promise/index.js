const fetchData = (key) => {
  return new Promise((resolve, reject) => {
    if (key !== "greeting") {
      reject(new Error(`unknown key: ${key}`));
      return;
    }

    setTimeout(() => {
      resolve("Hello");
    }, 1000);
  });
};

const processData = (data) => `data: ${data}`;

const fetchAndDisplayData = (key) => {
  return fetchData(key)
    .then((data) => processData(data))
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.error(e);
    });
};

fetchAndDisplayData("greeting");
fetchAndDisplayData("credential");
