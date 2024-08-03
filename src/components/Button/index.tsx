// Button.tsx

interface IButton {
  text: string;
  action: () => void;
}

function Button({ text, action }: IButton) {
  return (
    <button className="bg-green-light rounded p-1" onClick={action}>
      {text}
    </button>
  );
}

export default Button;
