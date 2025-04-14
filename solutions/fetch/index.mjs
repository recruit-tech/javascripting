// Top-level await
const todo = await fetchTodo();
console.log(todo);

async function fetchTodo() {
  const response = await fetch("https://dummyjson.com/todos/1");
  // 200 – 299 の範囲外のステータスの時
  if (!response.ok) {
    throw new Error(`Error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data.todo;
}
