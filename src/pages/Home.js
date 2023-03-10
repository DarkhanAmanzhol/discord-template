import { useState } from "react";
import Bar from "../components/Bar";
import Channel from "../components/Channels";
import Chat from "../components/Chat";
import Members from "../components/Members";
import TopBar from "../components/TopBar";

export default function Home() {
  const [showMembersPage, setShowMembersPage] = useState(true);

  return (
    <div className='flex flex-row h-screen'>
      <TopBar setShowMembersPage={setShowMembersPage} showMembersPage={showMembersPage} />
      <div className='basis-20'>
        <Bar />
      </div>
      <div className='basis-72'>
        <Channel />
      </div>
      <div className={showMembersPage ? "w-[calc(100%-41rem)]" : "w-[calc(100%-23rem)]"}>
        <Chat />
      </div>
      <div className={showMembersPage ? "basis-72" : "hidden"}>
        <Members />
      </div>
    </div>
  );
}
