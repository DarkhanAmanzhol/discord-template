import { ReactComponent as ArrowDownImage } from "../images/chevron-down.svg";
import { ReactComponent as HashImage } from "../images/hash.svg";
import { ReactComponent as BellImage } from "../images/bell.svg";
import { ReactComponent as BellSlashImage } from "../images/bell-slash.svg";
import { ReactComponent as PinImage } from "../images/pin.svg";
import { ReactComponent as UsersImage } from "../images/users.svg";
import { ReactComponent as AtSymbolImage } from "../images/at-symbol.svg";
import { ReactComponent as QuestionMarkImage } from "../images/question-mark.svg";
import SearchBar from "../ui/SearchBar";
import { useState } from "react";

export default function TopBar({ showMembersPage, setShowMembersPage }) {
  const [clickedBell, setClickedBell] = useState(true);

  const handleClickedBell = () => {
    setClickedBell((currentBell) => !currentBell);
  };

  return (
    <section className='fixed left-20 z-10 w-[calc(100%-5rem)] flex text-white shadow-lg'>
      <div className='flex justify-between w-72 bg-dark-secondary px-5 py-3'>
        <div>Game Center</div>
        <ArrowDownImage className='w-5' />
      </div>
      <div className='flex justify-between items-center w-[calc(100%-18rem)] bg-stone-600 px-6'>
        <div className='flex'>
          <HashImage className='w-5' />
          <div className='text-base pl-2'>welcome</div>
        </div>
        <div className='flex'>
          {clickedBell ? (
            <BellImage
              className='w-6 mr-4 cursor-pointer hover:text-yellow-300 duration-200'
              onClick={handleClickedBell}
            />
          ) : (
            <BellSlashImage
              className='w-6 mr-4 cursor-pointer hover:text-yellow-300 duration-200'
              onClick={handleClickedBell}
            />
          )}
          <PinImage className='w-6 mr-4 cursor-pointer hover:text-yellow-300 duration-200' />
          <UsersImage
            className={
              showMembersPage
                ? "w-6 mr-4 cursor-pointer hover:text-yellow-300 duration-200"
                : "w-6 mr-4 cursor-pointer hover:text-yellow-300 duration-200 text-yellow-300"
            }
            onClick={() => setShowMembersPage((currentShow) => !currentShow)}
          />
          <SearchBar />
          <AtSymbolImage className='w-6 mx-4 cursor-pointer hover:text-yellow-300 duration-200' />
          <QuestionMarkImage className='w-6 cursor-pointer hover:text-yellow-300 duration-200' />
        </div>
      </div>
    </section>
  );
}
