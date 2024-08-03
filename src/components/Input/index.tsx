// Input.tsx
import React from "react";

interface IInput {
  value: string;
  placeholder?: string;
  action: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ value, placeholder, action }: IInput) {
  return (
    <input
      className="bg-green-pop rounded p-1 text placeholder-green-dark"
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={action}
    />
  );
}

export default Input;
