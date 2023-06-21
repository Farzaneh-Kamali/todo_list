import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const list = props.items.map((item) => (
    <TodoItem
      key={item.id}
      id={item.id}
      title={item.title}
      onDeleteClick={props.onDeleteClick}
      onEditClick={props.onEditClick}
    />
  ));
  return (
    <>
      <div className="flex justify-between p-3 font-bold text-green-700 border-b-2 border-b-gray">
        <div className="flex space-x-10">
          <div>N</div>
          <div>Tasks</div>
        </div>
        <span>Action</span>
      </div>
      {list}
    </>
  );
};

export default TodoList;
