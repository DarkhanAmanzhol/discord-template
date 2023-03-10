const Avatar = ({ username }) => {
  return (
    <div className='relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-600 rounded-full'>
      <span className='font-medium text-gray-300'>{username[0]}</span>
    </div>
  );
};

export default Avatar;
