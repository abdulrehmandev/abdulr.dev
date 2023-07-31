const SkillButton = ({ text }) => {
  return (
    <button className="dark:bg-purple-800/25 bg-purple-300/25  px-4 py-1 rounded-full text-sm text-purple-600 dark:text-purple-400">
      {text}
    </button>
  );
};

export default SkillButton;
