import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleStatus, resetTodoList } from "../redux/reducers/todo";

import InputField from "../components/InputField";
import Button from "../components/Button";
import DisplayList from "../components/DisplayList";

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.value);
  const [todoItem, setTodoItem] = useState("");

  const handleAdd = () => {
    if (todoItem) {
      dispatch(
        addTodo([
          {
            id: uuidv4(),
            message: todoItem,
            done: false,
          },
          ...todos,
        ])
      );
      setTodoItem("");
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleStatus(id));
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="w-3/4 mx-auto text-center">
      <h1 className="pt-12 text-5xl pb-12">Todo App</h1>
      <div>
        <InputField
          Type="text"
          ClassName=" text-black px-4 py-2 text-center w-full"
          PlaceHolder="Add Task Here..."
          Value={todoItem}
          OnChange={setTodoItem}
          OnKeyDown={handleEnter}
        />
      </div>

      <div className="text-right pt-5 text-sm">
        <Button OnClick={() => dispatch(resetTodoList())} Text="Reset List" />
      </div>

      <DisplayList Todo={todos} OnClick={handleToggle} />
    </div>
  );
};

export default Home;
