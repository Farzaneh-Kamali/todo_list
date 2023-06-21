import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Main() {
  const [items, setItems] = useState([
    { id: 1, title: "Task1" },
    { id: 2, title: "Task2" },
  ]);
  const [input, setInput] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState();

  const onChangeInput = (message) => {
    setInput(message);
  };

  const onAddClick = (message) => {
    if (isEdit) {
      setItems(
        items.map((item) =>
          item.id === editId ? { id: editId, title: message } : item
        )
      );
      setIsEdit(false);
    } else {
      const ids = items?.map((item) => item.id);
      const sorted = ids.sort((a, b) => a - b);
      const id = sorted[sorted.length - 1];
      setItems([...items, { id: id ? id + 1 : 1, title: message }]);
    }
    setInput("");
  };

  const onDeleteClick = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const onEditClick = (id, message) => {
    setIsEdit(true);
    setEditId(id);
    setInput(message);
  };

  return (
    <>
      <div className="container items-stretch py-5 justify-self-center">
        <TodoInput
          input={input}
          onChangeInput={onChangeInput}
          onAddClick={onAddClick}
          isEdit={isEdit}
        />
        <TodoList
          items={items}
          onDeleteClick={onDeleteClick}
          onEditClick={onEditClick}
        />
      </div>
    </>
  );
}

export default Main;
