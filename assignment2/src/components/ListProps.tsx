import React from "react";
import TodoItem from "./ItemProps";
import style from "./ListProps.module.less";

type ListProps = {
  itemList: { id: number; todoText: string; isDone: boolean }[];
  Change: (id: number) => void;
  Delete: (id: number) => void;
};

const TodoList: React.FC<ListProps> = ({ itemList, Change, Delete }) => {
  return (
    <ul className={style.ul}>
      {itemList.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.todoText}
          isDone={item.isDone}
          Change={() => Change(item.id)}
          Delete={() => Delete(item.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
