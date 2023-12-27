import { useEffect, useState } from "react";

const DataFetch = () => {
  const [todos, setTodos] = useState(null); //for data fetching
  const [isLoading, setIsLoading] = useState(true); // if data loding
  const [error, setError] = useState(null); //if catch error

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // data convert to json data
        if (!response.ok) {
          throw Error("data loding is unsuccessful"); //if get error in data fetching
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data); // data send to use state
        setIsLoading(false); // if get data not need loading
      })
      .catch((error) => {
        // for get any error in data fetching
        setError(error.message);
        setIsLoading(false); //if get error not need data loading
      });
  }, []);

  const todoElement =
    todos &&
    todos.map((todo) => {
      //if todos is true then map work
      return <p key={todo.id}>{todo.name}</p>;
    });

  return (
    <div>
      <h1>DataFatch</h1>
      {todoElement}
      {isLoading && "Data is loading"}
      {/* if data is loding then it will be give message */}
      {error && error}{" "}
      {/* if get any error then error will work and it will give error message  */}
    </div>
  );
};

export default DataFetch;
