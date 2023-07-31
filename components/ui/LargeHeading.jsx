const LargeHeading = ({ text, className }) => {
  return (
    <h2
      className={`font-bold my-4 mx-auto text-3xl sm:text-4xl tracking-tight ${
        className ? className : ""
      }`}
    >
      {text}
    </h2>
  );
};

export default LargeHeading;
