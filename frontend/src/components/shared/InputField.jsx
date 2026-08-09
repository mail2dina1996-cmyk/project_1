const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  name,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="mb-2 block text-[17px] font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-[5px] border-2 border-gray-200 px-3 py-3 shadow-md outline-none focus:ring-2 focus:ring-red-200"
      />
    </div>
  );
};

export default InputField;
