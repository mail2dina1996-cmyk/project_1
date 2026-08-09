const Card = ({ children, className = "" }) => {
  return (
    <div className={`border rounded p-4 shadow-sm bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;
