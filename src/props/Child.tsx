import { useState } from "react";

interface ChildProps {
  color: string;
  clickFunc: () => void; //void означает, что функция ничего не возвращает, нет return
}

export const Child: React.FC<ChildProps> = ({ color, clickFunc, children }) => {
  const [name, SetName] = useState<string>("");
  return (
    <div>
      <h2>HEllo world </h2>
      {color}
      {children}
      <button onClick={clickFunc}> Кликни меня </button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => SetName(e.target.value)}
      />
    </div>
  );
};
