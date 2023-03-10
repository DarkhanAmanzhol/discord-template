import MessageBar from "../ui/MessageBar";

export default function Chat() {
  return (
    <section className='relative h-full bg-stone-600'>
      <div>
        <h1>Some Content</h1>
      </div>
      <div className='absolute left-0 bottom-0 w-full px-5 py-1'>
        <hr className='mb-6 border-grey' />
        <MessageBar />
      </div>
    </section>
  );
}
