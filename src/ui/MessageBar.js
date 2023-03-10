import { ReactComponent as GiftImage } from "../images/gift.svg";
import { ReactComponent as SmileImage } from "../images/smile.svg";
import { ReactComponent as PlusCircleImage } from "../images/plus-circle.svg";
import { ReactComponent as GifImage } from "../images/gif.svg";

const MessageBar = () => {
  return (
    <div className='relative w-full mb-6'>
      <div className='absolute inset-y-0 left-0 flex items-center pr-3 pointer-events-none'>
        <PlusCircleImage className='w-8 ml-3' />
      </div>
      <input
        type='textarea'
        id='default-input'
        placeholder='Message #welcome'
        className='w-full text-sm rounded-lg focus:border-blue-500 block py-4 pl-14 pr-32 placeholder:leading-6 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500 outline-none overflow-auto scrollbar-hide'
      />
      <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
        <GiftImage className='w-7 mx-1' />
        <GifImage className='w-7 mx-1' />
        <SmileImage className='w-7 mx-1' />
      </div>
    </div>
  );
};

export default MessageBar;
