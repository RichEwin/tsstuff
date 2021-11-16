import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number,
  title: string,
  completed: boolean,
}

axios.get(url).then((res) => {
  const response = res.data as Todo;

  const id = response.id
  const title = response.title
  const completed = response.completed

  logTodo(id, title, completed);

});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    ID: ${id}
    Title: ${title}
    Completed: ${completed}
  `);
}