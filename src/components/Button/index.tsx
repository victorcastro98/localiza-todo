interface IButton {
  text: string;
  action: () => void;
  type?: "danger" | "secondary"
}

function Button({ text, action, type }: IButton) {
  const bgColor = {
    danger: 'red',
    secondary: 'transparent',
  };
  return (
    <button 
    style={{
      border: `${type === "secondary" && "1px solid white"}`,
      background: `${type ? bgColor[type] : ""}`
    }}
    className="bg-green-light rounded p-1 hover:text-green-pop" 
    onClick={action}>
      {text}
    </button>
  );
}

export default Button;
