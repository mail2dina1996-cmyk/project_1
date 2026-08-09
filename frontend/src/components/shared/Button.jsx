const Button = ({ children, type = "button", onClick, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-3 cursor-pointer rounded bg-red-500 hover:bg-red-600 text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
