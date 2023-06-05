const ErrorMessage = ({ children }) => {
  return (
    <div
      className="w-full p-2 my-1 rounded bg-rose-600 text-center text-white capitalize">
      {children}
    </div>
  );
};

export default ErrorMessage;
