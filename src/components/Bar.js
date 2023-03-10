import GroupAvatar from "../ui/GroupAvatar";

export default function Bar() {
  return (
    <section className='h-full bg-dark-primary flex flex-col items-center overflow-auto scrollbar-hide'>
      <div className='my-3 cursor-pointer'>
        <GroupAvatar name='1' />
      </div>
      <div className='my-3 cursor-pointer'>
        <GroupAvatar name='2' />
      </div>
      <div className='my-3 cursor-pointer'>
        <GroupAvatar name='3' />
      </div>
      <div className='my-3 cursor-pointer'>
        <GroupAvatar name='4' />
      </div>
      <div className='my-3 cursor-pointer'>
        <GroupAvatar name='5' />
      </div>
    </section>
  );
}
