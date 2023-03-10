import { useState } from "react";
import { ReactComponent as HashImage } from "../images/hash.svg";
import { ReactComponent as AddUserImage } from "../images/user-plus.svg";
import { ReactComponent as ChatImage } from "../images/chat.svg";

const ChannelLine = ({ channel_name }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className='flex items-center justify-between mx-2 my-1 p-2 rounded-md text-grey hover:text-neutral-300 hover:bg-stone-600 cursor-pointer duration-200 ease-in-out'
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div className='flex'>
        <HashImage className='w-5' />
        <span className='text-base pl-2'>{channel_name}</span>
      </div>
      {isHover && (
        <div className='flex items-center justify-end'>
          <ChatImage className='w-4 mr-3' />
          <AddUserImage className='w-4' />
        </div>
      )}
    </div>
  );
};

export default ChannelLine;
