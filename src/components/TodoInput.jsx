import React from "react";

const TodoInput = (props) => {
  const onChangeInput = (e) => {
    props.onChangeInput(e.target.value);
  };

  const onSubmitClick = () => {
    props.onAddClick(props.input);
  };

  return (
    <div className="flex justify-start p-3 space-x-3 border border-green-800 border-solid rounded bg-lime-50">
      <input
        type="text"
        className="w-3/4 px-2 border-2 border-green-800 rounded"
        onChange={(e) => onChangeInput(e)}
        value={props.input}
      />
      <button
        className="p-2 text-sm text-green-700 border-2 border-green-800 rounded"
        onClick={onSubmitClick}
      >
        {props.isEdit ? "Edit Task" : " Add Task"}
      </button>
    </div>
  );
};

export default TodoInput;
