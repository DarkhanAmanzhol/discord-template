const GroupAvatar = ({ name }) => {
  return (
    <div className='relative inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-gray-600 rounded-full hover:rounded-2xl hover:duration-800 duration-800 hover:transition-all ease-in-out hover:bg-blue-600'>
      <span className='font-medium text-gray-300'>{name}</span>
    </div>
  );
};

export default GroupAvatar;
