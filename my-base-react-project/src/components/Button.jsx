const Button = ({ isDisabled, title, onClickFn, className }) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClickFn}
      className={`${className} disabled:bg-gray-200 border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer`}
    >
      {title}
    </button>
  );
};

export default Button;
