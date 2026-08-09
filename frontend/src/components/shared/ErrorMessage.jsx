const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return <div className="text-red-600 p-2">{message}</div>;
};

export default ErrorMessage;
