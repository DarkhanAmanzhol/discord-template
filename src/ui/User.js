import Avatar from "./Avatar";

const User = ({ username, info }) => {
  return (
    <div className='flex flex-row rounded-md text-grey hover:bg-slate-600 hover:text-white  p-2 cursor-pointer duration-200'>
      <Avatar username={username} />
      <div className='flex flex-col justify-center pl-2'>
        <div className='text-base leading-4'>{username}</div>
        {info && <div className='text-xs'>{info}</div>}
      </div>
    </div>
  );
};

export default User;
