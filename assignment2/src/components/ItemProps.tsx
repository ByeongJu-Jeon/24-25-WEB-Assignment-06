import React from "react";
import style from "./ItemProps.module.less";

type ItemProps = {
  todoText: string;
  isDone: boolean;
  Change: () => void;
  Delete: () => void;
};

const TodoItem: React.FC<ItemProps> = ({ todoText, isDone, Change, Delete }) => {
  return (
    <li>
      <input type="checkbox" className={style.checkbox} checked={isDone} onChange={Change} />
      <p
        className={style.text}
        style={{
          textDecoration: isDone ? "line-through" : "none",
          textDecorationColor: isDone ? "black" : "transparent",
        }}
      >
        {todoText}
      </p>
      <p className={style.button} onClick={Delete}>
        삭제
      </p>
    </li>
  );
};

export default TodoItem;
