import { useState } from "react";
import TodoList from "./components/ListProps";
import style from "./App.module.less";

type TodoListType = {
  id: number;
  todoText: string;
  isDone: boolean;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState<TodoListType[]>([]);
  const [count, setCount] = useState(0);

  const AddItem = () => {
    if (inputValue.trim()) {
      const newItem: TodoListType = {
        id: itemList.length + 1,
        todoText: inputValue,
        isDone: false,
      };
      setItemList([...itemList, newItem]);
      setInputValue("");
      setCount(count + 1);
    } else {
      alert("등록할 일정을 입력해주세요!");
    }
  };

  const DeleteItem = (id: number) => {
    const updatedList = itemList.filter((item) => item.id !== id);
    setItemList(updatedList);
    setCount(count - 1);
  };

  const ChangeItem = (id: number) => {
    const updatedList = itemList.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setItemList(updatedList);

    const remainedCount = updatedList.filter((item) => item.isDone).length;
    setCount(itemList.length - remainedCount);
  };

  return (
    <div className={style.container}>
      <div className={style.title}>TodoList</div>
      <div className={style.sentence}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="오늘 할 일을 추가해보세요!"
        />
        <TodoList itemList={itemList} Change={ChangeItem} Delete={DeleteItem} />
      </div>

      <div className={style.bottom}>
        <p className={style.today}>오늘 할 일 {count}</p>
        <p onClick={AddItem} className={style.add}>
          추가하기
        </p>
      </div>
    </div>
  );
}

export default App;
