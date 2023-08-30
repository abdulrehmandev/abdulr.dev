const SectionDescription = ({ text, className }) => {
  return (
    <h2
      className={`font-medium mb-10 mx-auto text-lg md:text-xl max-w-xs sm:max-w-lg opacity-70 ${
        className ? className : ""
      }`}
    >
      {text}
    </h2>
  );
};

export default SectionDescription;
