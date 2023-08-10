const SkillButton = ({ text }) => {
  return (
    <div className="cursor-default dark:bg-amber-800/20 bg-amber-300/25  px-4 py-1 rounded-full text-sm text-amber-600 dark:text-amber-400">
      {text}
    </div>
  );
};

export default SkillButton;
