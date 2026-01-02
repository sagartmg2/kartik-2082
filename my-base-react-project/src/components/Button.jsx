const Button = ({ title, onClickFn }) => {
  return (
    <button
      disabled
      onClick={onClickFn}
      className=" disabled:bg-gray-300 border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer"
    >
      {title}
    </button>
  );
};

export default Button;
