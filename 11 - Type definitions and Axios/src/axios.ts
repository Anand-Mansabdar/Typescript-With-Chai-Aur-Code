// import axios, { AxiosResponse } from "axios";
// you get red line but its not an error

// To avoid req lines on the above 'import' statement we have to import it as follows

import axios from "axios";
import type { AxiosResponse } from "axios"; // No error

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// axios.get("https://example.com/data").then((response) => {
//   console.log(response.data);
// });

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Todo", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      if (error.response) {
        console.log(error.response.status);
      }
    }
  }
};
