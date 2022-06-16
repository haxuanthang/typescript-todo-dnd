import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, onAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      action=""
      className="input"
      onSubmit={(e) => {
        onAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        className="input__box"
        placeholder="Enter your task"
      />
      <button className="input_submit">GO</button>
    </form>
  );
};

export default InputField;
