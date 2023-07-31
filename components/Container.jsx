const Container = ({ className, children }) => {
  return (
    <div
      className={`max-w-[1200px] mx-auto xl:px-6 px-4 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
