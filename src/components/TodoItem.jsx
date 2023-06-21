import React from "react";

const TodoItem = (props) => {
  const onDeleteClick = () => {
    props.onDeleteClick(props.id);
  };

  const onEditClick = () => {
    props.onEditClick(props.id, props.title);
  };

  return (
    <div className="flex justify-between p-3 border-b-2 border-b-gray">
      <div className="flex space-x-10">
        <div>{props.id}</div>
        <div>{props.title}</div>
      </div>
      <div className="flex space-x-3">
        <button
          className="p-2 text-xs font-medium text-white bg-blue-700 border-blue-700 rounded"
          onClick={onEditClick}
        >
          Edit
        </button>
        <button
          className="p-2 text-xs font-medium text-white bg-red-700 border-red-700 rounded"
          onClick={onDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
