const SectionDescription = ({ text, className }) => {
  return (
    <h2
      className={`font-medium mb-10 mx-auto text-lg max-w-xs sm:max-w-lg opacity-60 ${
        className ? className : ""
      }`}
    >
      {text}
    </h2>
  );
};

export default SectionDescription;
