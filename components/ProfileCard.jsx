const ProfileCard = () => {
  return (
    <div className="flex gap-6 text-left items-center my-4">
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img
          src="https://avatars.githubusercontent.com/u/10047061?v=4"
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <h4 className="text-xl font-semibold">Abdul Rehman</h4>
        <p className="opacity-60">Web and Mobile App Developer</p>
      </div>
    </div>
  );
};

export default ProfileCard;
